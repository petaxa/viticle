# 新たな論文を追加する

Markdown形式になった論文をViticleに追加します。

## 扱うフォルダと役割

論文追加時に関係するフォルダとその役割は以下のようなものです

- `docs/articles/`: Markdown形式の論文ファイルを配置するフォルダ
- `docs/src/articlesConfig.ts`: 追加した論文に関する情報を追加する設定ファイル

## 論文ファイルを追加

### 1. 論文フォルダを作成 <Badge type="danger" text="必須" />{#create-article-folder}

- `docs/articles/`に論文フォルダを作成します。フォルダ名は他の論文と重複しないようにしてください。

::: info
このフォルダ名がViticle内で表示されるわけではありません。表示名は後で設定します。
:::

### 2. 論文全文のMarkdownファイルを追加 <Badge type="danger" text="必須" />

- `paper.md`というファイル名で、`docs/articles/paper.md`に配置します。

### 3. 要約用のフォルダを作成し、配置する <Badge type="info" text="オプショナル" />{#create-summary}

要約のMarkdownファイルがある場合、それらも閲覧することができます。この設定はオプショナルです。

また、要約は複数ページに分割することができます。(Viticleはそれを推奨します。)

- `docs/articles/論文フォルダ/`に`summary`というフォルダを作成します。
- `docs/articles/論文フォルダ/summary/`に要約のMarkdownファイルを配置します。

## 設定ファイルに論文情報を追加

`docs/src/articlesConfig.ts`に以下の形式のオブジェクトを追加します。

```ts
論文フォルダ名:{
    title: 論文タイトル,
    items: [
        { text: 要約ページタイトル, link: 要約ファイル名},
        // 要約のページの数だけ追加する
    ]
}
```

- `論文フォルダ名`: [論文フォルダを作成](#create-article-folder)で作成したフォルダ名 <Badge type="tip" text="既定" />
- `論文タイトル`: 論文のタイトル <Badge type="warning" text="未定" />
- `要約ページタイトル`: 要約ページのタイトル <Badge type="warning" text="未定" />
- `要約ファイル名`: [要約用のフォルダを作成し、配置する](#create-summary)で配置したファイルのファイル名 <Badge type="tip" text="既定" />

::: tip example

```ts
LetsVerifyStepbyStep:{
    title: "Let’s Verify Step by Step",
    items: [
        { text: "Intro", link: "intro"},
        { text: "Methods", link: "methods"},
        { text: "Large-scale Supervision", link: "supervision"},
    ]
}
```

:::

## 再度起動する

以下のコマンドを実行して再度起動してください。

```sh
npm run docs:build
npm run docs:preview
```

これは[Vitecleの起動](../getting-started.md#vitecleの起動)と同手順です。
