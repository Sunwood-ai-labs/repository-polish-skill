# 使い方

## 依頼例

Codex に対して、次のように使います。

- `Use $repository-polish to clean up this repo and add a stronger README.`
- `Use $repository-polish to add bilingual docs and GitHub Pages deployment.`
- `Use $repository-polish to make this repository feel ready for public release.`
- `Use $repository-polish to 完全整備 this repository.`
- `Use $repository-polish to 最適整備 this repository.`

## 典型フロー

1. PowerShell スクリプトで repo の状態を収集する
2. README、docs、workflow、metadata、finish-line blocker を確認する
3. 要求、変更物、最終 claim に対応する QA inventory を書く
4. scope を決める前に polish mode を決める
5. `最適整備` なら、その repo に合う最小の coherent plan を選ぶ
6. default または `完全整備` なら、docs、workflow、metadata、検証、commit、push まで進める
7. `完全整備` で remote、Pages enablement、publish 修復が必要なら、auth がある限り finish-line work として扱う
8. user-facing surface を変えたら、source、config、build output で codebase QA を行う
9. 最後の blocker が出たら、そこ以外を終わらせたうえで blocker を明記する

## 良い振る舞い

- 既存の visual language があるなら尊重する
- `最適整備` では維持できない docs 構造を無理に増やさない
- 英語と日本語の docs を両方求められたら構造を揃える
- header や hero art がない repo では再利用可能な SVG identity asset を作る
- 生成 SVG は平面的で幾何学的にし、既存ロゴのコピーにしない
- push 前に URL、badge、workflow path、Pages 設定、source 上の docs 構造を確認する
- signoff 前に README と docs の構造、見出し順、locale 対応を確認する
- Python は raw の `python` ではなく `uv run` を優先する
- 最終 claim を実際の QA チェックに対応づける
- docs を変えたら build 成功だけでなく codebase QA を行う
- `完全整備` と言われたのに勝手に downscope しない
- repo に unfinished work が残っているのに最初の visible deliverable で止まらない
