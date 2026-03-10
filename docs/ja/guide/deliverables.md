# 成果物

## よくある出力

この skill でよく作るものは次のとおりです。

- `README.md`
- `README.ja.md`
- VitePress ベースの `docs/`
- `.github/workflows/ci.yml`
- `.github/workflows/deploy-docs.yml`
- repository homepage や topics の提案
- 構造QAとブラウザQAの実施内容メモ

## README 改善

README では次のような改善が入ることがあります。

- より強いタイトルと導入
- badge と言語切り替え
- 分かりやすい quick start と repo 構成
- 公開 docs へのリンク

## 最後までの仕上げ

ユーザーが部分作業を明示しない限り、通常の完了ラインには次が含まれます。

- docs を追加した場合の build 確認
- workflow path と Pages base の確認
- 権限がある場合の repo metadata 更新
- ローカル preview 可能な docs へのブラウザQA
- 小さく戻しやすい単位での commit
- push 可能な remote への push

最終 publish だけがプラン、権限、visibility の都合で止まる場合でも、そこ以外は公開直前状態まで進めて blocker を明記します。

## 日英 docs のそろえ方

英語と日本語の両方が必要な場合は、次をそろえます。

- 英語は `README.md`
- 日本語は `README.ja.md`
- `docs/guide/` と `docs/ja/guide/` でページ構成を対応させる
- 文言は自然に調整しても、見出し順はそろえる
