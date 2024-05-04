# Viticle

## 何をする？

vitePressを利用して素早く、美しい論文ビューワーを実現する
- markdownをファイルに含めるだけの素早い追加
- vitePressとmarkdownによる美しい見た目

また、要約ファイルの追加を実現し、スピーディーな論文の読解をサポートする

## 画面の種類

### Home

- ホーム
- 論文一覧ページ、ガイドへのリンクがある
- タイトルなどのサービスの主要情報も表示
- featuresでいい感じに特長を列挙したい

### 論文一覧ページ

- Vueコンポーネントで動的な表示を実現
- 各論文ページへのリンクが置いてある

### 論文ページ

- 各論文ごとに用意
- サイドバーは各論文ごとに固有
    - 要約の最後に全文を配置
    - つまり、要約の見出しが連続し、最後に全文へのリンクが張られる

### ガイド

- 論文の新規追加の方法や読む際のガイド
- 読む、書くのふたつに大きく分けられ、その中で細かな色々を説明
    - サイドバーは共通のものをひとつ。

## フォルダ構成

```md
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
```

## 論文新規登録手順

1. articles直下に論文を一意に表すフォルダ(以下`論文フォルダ`と呼称)を作成
2. `論文フォルダ`内に`summary`**フォルダ**と`paper.md`を作成
3. `summary`フォルダに作成した要約をすべて格納
4. `paper.md`にmd化した論文全文に。
5. `docs/src/articlesConfig.ts`に論文フォルダ名と要約見出し名、要約ファイル名を登録
    1. 論文フォルダ名をキーに、日本語タイトルと要約見出し名とファイル名のセットを配列で持つ

```TS
export const articlesSummaryHeadingsInfos: articleSummaryHeadingsInfo = {
    論文フォルダ名: {
        title: 論文タイトル,
        items: [
            { text: 見出し1のタイトル, link: 見出し1のファイル名 },
            { text: 見出し2のタイトル, link: 見出し2のファイル名 },
            // 要約ファイルをすべて登録
        ],
    },
    // 論文が追加されるごとに上記のオブジェクトを追加していく
};
```
