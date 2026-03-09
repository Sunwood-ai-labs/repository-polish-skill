# 使い方

## 依頼例

Codex には次のように依頼できます。

- `Use $repository-polish to clean up this repo and add a stronger README.`
- `Use $repository-polish to add bilingual docs and GitHub Pages deployment.`
- `Use $repository-polish to make this repository feel ready for public release.`

## 標準フロー

1. PowerShell スクリプトで repo を棚卸しする。
2. README、docs、workflow、metadata を確認する。
3. 依頼を満たす最小の一貫した計画を立てる。
4. ユーザーが範囲を狭めていない限り、docs、workflow、metadata、検証、commit、push まで進める。
5. 最後の一歩だけ blocker がある場合は、残りを完了させて blocker を明記する。

## 良い振る舞い

- 既存のデザイン言語があるなら尊重する
- 維持できない docs 構成を増やしすぎない
- 英語と日本語の docs を両方作る場合は構造をそろえる
- push 前に URL、badge、workflow path、Pages 設定を確認する
- まだ仕上げが残っているのに最初の成果物だけで止まらない
