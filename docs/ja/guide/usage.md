# 使い方

## 依頼例

Codex には次のように依頼できます。

- `Use $repository-polish to clean up this repo and add a stronger README.`
- `Use $repository-polish to add bilingual docs and GitHub Pages deployment.`
- `Use $repository-polish to make this repository feel ready for public release.`

## 典型フロー

1. PowerShell スクリプトで repo の状態を収集する。
2. README、docs、workflow、metadata、未完了の blocker を確認する。
3. 要求された成果物、変更対象、最終回答で述べる主張を QA inventory として書き出す。
4. 要件を満たす最小の整合あるプランを決める。
5. ユーザーが範囲を狭めない限り、docs、workflow、metadata、検証、commit、push まで進める。
6. ユーザー向けの成果物を変えた場合は、source、config、build 出力を使ってコードベース QA を行う。
7. 最後の一歩に blocker があっても、そこ以外を完了させたうえで blocker を明記する。

## 良い振る舞い

- 既存のデザイン言語があるなら尊重する
- 維持できない docs 構成を増やさない
- 英語と日本語の docs をそろえる
- header や hero 画像がない repo では、再利用できる SVG アイコンを作る
- 生成する SVG アイコンは、`https://fonts.google.com/icons` の Google Fonts icons と Material Symbols の見た目を参考にしつつ、既存ロゴのコピーにはしない
- push 前に URL、badge、workflow path、Pages 設定、source 上の docs 構造を確認する
- signoff 前に README と docs の構成、見出し順、日英対応を確認する
- README の `##` 見出しは、読みやすさが上がるなら絵文字付きにする
- Python を使う場合は raw の `python` ではなく `uv run` を使う
- 最終回答の各主張を実際の QA チェックに対応づける
- docs を変えたら build 成功だけで済ませずコードベース QA も行う
- 目立つ成果物をひとつ作っただけで途中終了しない
