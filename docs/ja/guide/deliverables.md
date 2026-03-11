# 成果物

## よくある出力

この skill でよく作るものは次のとおりです。

- `README.md`
- `README.ja.md`
- VitePress ベースの `docs/`
- `.github/workflows/ci.yml`
- `.github/workflows/deploy-docs.yml`
- `docs/public/favicon.svg`、`logo.svg`、または header art に使える再利用可能な SVG identity asset
- favicon から hero まで流用できる平面的な幾何 SVG
- repository homepage や topics の提案
- source、config、build output で何を確認したかを示す QA notes
- `完全整備` で finish line に必要なら、remote 作成、初回 push、Pages enablement

## README 改善

README では次のような改善が入りえます。

- より強い title と intro
- badge と language switch
- 読みやすさが上がるなら emoji 付き `##` 見出し
- 分かりやすい quick start と repo layout
- 公開 docs へのリンク

## 最終的な仕上がり

ユーザーが partial task を明示しない限り、finish line には通常次が含まれます。

- docs を追加したなら build 検証
- workflow path と Pages base の確認
- 権限があるなら repo metadata の更新
- docs など user-facing surface に対する codebase QA
- 小さく復元しやすい commit 履歴
- push 可能な remote への push

最後の publish step だけが plan、権限、visibility で止まる場合でも、repo は可能な限り ready state にして blocker を明記します。

`最適整備` と明示された場合は、この一覧を必須セットではなく候補一覧として扱い、その repo に効くものだけ選びます。

## 日英 docs の揃え方

英語と日本語の両方が必要な場合は、次を揃えます。

- 英語は `README.md`
- 日本語は `README.ja.md`
- ページ構造は `docs/guide/` と `docs/ja/guide/` で対応させる
- wording はローカライズしても、見出しの役割は揃える
