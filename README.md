# Viticle

## 何をする？

vitePressを利用して素早く、美しい論文ビューワーを実現する
    markdownをファイルに含めるだけでOK: 素早い
    vitePressの美しい見た目: 美しい
要約も載せられるようにし、本文と簡単に切り替えることができる
検索機能を付ける

## ルーティング設計

ホーム画面から、各論文ページへのリンクとGetStartedが生えている
各論文ページは要約のトップに飛ぶ
そのページの右上で要約と本文を切り替えられる

## 画面の種類

### Home

ホーム。
各論文ページのボタンリスト、GetStartedへのリンクがある
タイトルとかも。

### 論文ページ

要約の最後に全文を配置
つまり、要約の見出しが連続し、最後に全文へのリンクが張られる

### GetStarted

論文の新規追加の方法や読む際のガイド
読む、書くのふたつに大きく分けられ、その中で細かな色々を説明
サイドバーはひとつ。

## フォルダ構成

docs/
├── `index.md`: HomePage
├── articles/
│   ├── `ArticlesList.vue`
│   ├── `index.md`: 論文一覧ページ
│   ├── demo1/
│   │   ├── `paper.md`: demo1論文全文
│   │   └── summary/: demo1論文の要約フォルダ
│   │       ├── `headone.md`: 見出し1 ※ここは順不同
│   │       └── `headtwo.md`: 見出し2
│   └── demo2/: 同様にdemo2
│       ├── `paper.md`
│       └── summary/
│           ├── `headone.md`
│           └── `headtwo.md`
├── guide/: 使い方ガイドページ
│   └── `introduction.md`
└── src/
    ├── `articlesConfig.ts`: 登録論文情報
    └── utils/
        ├── `sidebarFactory.ts`
        └── `type.ts`

## 論文新規登録手順

1. articles直下に論文を一意に表すフォルダ(以下`論文フォルダ`と称す)を作成
2. `論文フォルダ`内に`summary`**フォルダ**と`paper.md`を作成
3. `summary`フォルダに作成した要約をすべて格納
4. `paper.md`にmd化した論文全文に。
5. `docs/src/articlesConfig.ts`に論文フォルダ名と要約見出し名、要約ファイル名を登録
