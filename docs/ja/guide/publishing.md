# 公開とデプロイ

## 🚀 GitHub Pages の流れ

VitePress docs を公開する場合の基本形は次の通りです。

1. 検証用の docs build workflow を追加する
2. Pages デプロイ workflow を追加する
3. `docs/.vitepress/dist` を配信対象にする
4. VitePress の `base` を repository 名に合わせる

## 🔐 Pages がまだ有効化されていない場合

Pages site がまだ無くて deploy workflow が失敗する場合は、GitHub CLI で作成できます。

```bash
gh api repos/OWNER/REPO/pages -X POST -f build_type=workflow
```

## 🏷️ 公開向け metadata

公開 repo では次も合わせて見ると整いやすいです。

- repo description
- homepage URL
- GitHub topics
- ソーシャルカード用 asset

## 🌐 Website と topics の設定

公開前提の repo なら、metadata は空欄のままにせず明示的に設定すると整いやすいです。

GitHub CLI の例:

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

GitHub 上の Website 欄には、通常は `homepage` に設定した URL が表示されます。docs が主役の repo なら、GitHub Pages の公開 URL を入れるのが基本です。

topics は次の観点で選ぶと分かりやすくなります。

- その repo が何か
- どのツールや技術を使うか
- どんな人に見つけてほしいか

## 📝 commit スタイル

commit message は英語で:

- 絵文字付きタイトル
- 本文に 3 行前後の bullet
- 後から復元しやすい小さな粒度
