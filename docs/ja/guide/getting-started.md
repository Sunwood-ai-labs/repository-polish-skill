# はじめに

## この skill が扱うこと

`repository-polish` は、既存リポジトリの公開向け品質を、必要以上に壊さずに引き上げるための skill です。

主な対象:

- より強い `README.md`
- 必要に応じた `README.ja.md`
- 複数ページ docs が有効なときの VitePress
- GitHub Actions と GitHub Pages
- 公開向けの metadata と導線整理
- signoff 前の構造QAとブラウザQA

## 最初の一歩

変更前に inventory スクリプトを実行します。

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\collect_repo_state.ps1 -RepoPath D:\Prj\some-repo
```

出力を見て、足りないものと触らない方がよいものを見分けます。

## 基本原則

ユーザーの要求を満たす最小の整合ある改善セットを選びます。

通常は次の流れになります。

1. repo を理解する
2. 最初に見える体験を改善する
3. docs が本当に有効なときだけ追加する
4. signoff 前に主張を全部検証する

## 主な参照先

skill 使用中は次のファイルを参照します。

- `SKILL.md`
- `references/repository-checklist.md`
- `references/qa-signoff.md`
- `references/bilingual-docs-pattern.md`
- `references/github-pages-notes.md`
