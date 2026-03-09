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

## 📝 commit スタイル

commit message は英語で:

- 絵文字付きタイトル
- 本文に 3 行前後の bullet
- 後から復元しやすい小さな粒度
