# はじめに

## 🧭 この skill が扱うこと

`repository-polish` は、必要以上に触りすぎずに、リポジトリの公開向け品質を上げることを目的にした skill です。

主な対象:

- より強い `README.md`
- 必要に応じた `README.ja.md`
- 複数ページ docs が有効なときの VitePress
- GitHub Actions と GitHub Pages
- 公開向けの導線や metadata の整理

## ⚙️ 最初の一歩

編集前に状態確認スクリプトを実行します。

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\collect_repo_state.ps1 -RepoPath D:\Prj\some-repo
```

この出力をもとに、足りないものと触らないほうがいいものを見極めます。

## 🧱 基本方針

依頼を満たす最小で一貫した改善セットを選ぶことが前提です。

流れとしては:

1. repo を理解する
2. 最初に見える部分を整える
3. docs は必要なときだけ足す
4. docs があるときだけ公開導線をつなぐ

## 📁 主な参照先

skill を使うときは、repo 内の次のファイルを参照します。

- `SKILL.md`
- `references/repository-checklist.md`
- `references/bilingual-docs-pattern.md`
- `references/github-pages-notes.md`
