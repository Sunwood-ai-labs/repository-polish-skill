# repository-polish-skill

Codex 向けのリポジトリ整備 skill です。既存リポジトリを、README、日英ドキュメント、VitePress / GitHub Pages、workflow、公開向けの見せ方まで含めて整えやすくします。

## できること

- 編集前にリポジトリの状態を棚卸しする
- `README.md` と `README.ja.md` を新規作成または改善する
- 英語と日本語に対応した `docs/` 構成を追加または整理する
- VitePress ドキュメント向けの GitHub Pages デプロイを整備する
- バッジ、homepage、章構成など公開向けの見た目を整える

## 含まれるファイル

- `SKILL.md`: skill の本体指示
- `agents/openai.yaml`: skill 用エージェント定義
- `scripts/collect_repo_state.ps1`: リポジトリの状態確認スクリプト
- `references/repository-checklist.md`: 実務向けチェックリスト
- `references/bilingual-docs-pattern.md`: 日英ドキュメント構成のガイド
- `references/github-pages-notes.md`: GitHub Pages 設定メモ

## 使い方

このリポジトリを Codex から参照できる場所に置き、`repository-polish` を使って対象リポジトリの整備を依頼します。

プロンプト例:

- `Use $repository-polish to clean up this repo and add a stronger README.`
- `Use $repository-polish to add bilingual docs and GitHub Pages deployment.`
- `Use $repository-polish to turn this internal repo into a public-facing project.`

## 補足

- ユーザーの依頼に対して、最小で一貫性のある改善セットを選ぶ前提で設計しています。
- この skill は `logged-in-google-chrome-skill` を整備して公開した流れをベースにしています。
