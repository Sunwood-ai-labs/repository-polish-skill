# 公開とデプロイ

## GitHub Pages の流れ

VitePress docs を公開するなら、基本形は次のとおりです。

1. 検証用の docs build workflow を追加する
2. Pages deploy workflow を追加する
3. workflow-based enablement で Pages を有効化する
4. `docs/.vitepress/dist` を publish artifact にする
5. VitePress の `base` を repository 名に合わせる

## Pages が未有効のとき

Pages site がまだ無くて deploy workflow が失敗するなら、まず workflow 側 enablement を使います。

```yaml
- name: Configure GitHub Pages
  uses: actions/configure-pages@v5
  with:
    enablement: true
```

それでも足りない、または workflow で作れない場合は GitHub CLI で作成します。

```bash
gh api repos/OWNER/REPO/pages -X POST -f build_type=workflow
```

## 公開向け metadata

public repo なら、次も合わせて検討します。

- repo description
- homepage URL
- GitHub topics
- 安定した social card asset

## Website と topics の設定

公開向け repo では、metadata を空のまま放置せず明示的に設定します。

典型的な GitHub CLI:

```bash
gh repo edit OWNER/REPO \
  --description "Short repo summary" \
  --homepage "https://OWNER.github.io/REPO/"
```

```bash
gh repo edit OWNER/REPO \
  --add-topic codex-skill \
  --add-topic documentation \
  --add-topic vitepress \
  --add-topic github-pages
```

GitHub 上の Website 値には通常 `homepage` を使います。docs 主体の repo なら、GitHub Pages の公開 URL を入れるのが基本です。

`完全整備` では、この metadata を空のままにせず finish line に含めます。

## Commit スタイル

commit message は次の形にします。

- 英語
- 絵文字付きタイトル
- 本文に 3 行前後の bullet
- 小さく復元しやすい単位
