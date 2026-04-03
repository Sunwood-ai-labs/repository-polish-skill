# はじめに

## この skill が扱うこと

`repository-polish` は、要求された整備の深さに合わせながら、repo の公開品質を上げるための skill です。

主な対象:

- より強い `README.md`
- 必要に応じた `README.ja.md`
- 複数ページ構成が有効なときの VitePress docs
- GitHub Actions と GitHub Pages
- metadata と navigation の整備
- closeout 前の structural QA と codebase signoff
- Python が必要なときの `uv run`

## 整備モード

- `完全整備`: docs、公開設定、metadata、remote 作成、push、workflow 修復まで含めて、意味のある finish line まで全部やる
- `最適整備`: まず repo を見て、その repo に合う最小の高価値セットを選ぶ
- mode 指定なし: ユーザーが狭めない限り full polish を既定にする

## 最初の一歩

変更前に inventory script を実行します。

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\collect_repo_state.ps1 -RepoPath D:\Prj\some-repo
```

この出力から、足りないもの、触らない方がいいもの、remote の有無、docs 公開が絡むなら Pages の有効化状況を判断します。

## GitHub 向け commit 前の確認

GitHub に送る前提の commit では、ステージ済みファイルの容量を確認します。

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\check_commit_payload.ps1 -RepoPath D:\Prj\some-repo
```

既定では 50 MiB 超で review、100 MiB 超で block します。巨大なバイナリ、archive、依存ディレクトリ、build output は、意図した deliverable でない限り commit から外します。

## 基本原則

要求された mode に合わせて深さを決め、その選んだ scope を最後までやり切ります。

通常は次の流れです。

1. repo を理解する
2. landing experience を改善する
3. docs は役立つときに足す。ただし `完全整備` なら full path を優先する
4. signoff 前に主張を検証し、commit 前に staged payload も確認する

## 主な参照先

skill 使用中は次のファイルを参照します。

- `SKILL.md`
- `scripts/check_commit_payload.ps1`
- `references/repository-checklist.md`
- `references/qa-signoff.md`
- `references/bilingual-docs-pattern.md`
- `references/github-pages-notes.md`
