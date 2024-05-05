# Viticleをはじめる

## 環境の確認

前提条件として以下が必要です。

### VitePressのコマンドを実行できるコマンドラインツール <Badge type="danger" text="必須" />

OS標準のコマンドラインツールがあれば基本的に問題ありません。

- Command Prompt
- Terminal

### [Node.js](https://nodejs.org/) version 18 またはそれ以上 <Badge type="danger" text="必須" />

コマンドラインで以下のコマンドを実行することでバージョンを確認することができます。

```sh
node -v
```

バージョンが表示されない、または表示されたバージョンが18以下の場合は[Nodeのインストール](./_dev/memo.md)をご覧ください。

### `TypeScript`, `Markdown`をサポートしているテキストエディタ <Badge type="tip" text="推奨" />

[VSCode](https://code.visualstudio.com/)を推奨します。

論文を追加する際に設定ファイルに追記を行います。ほとんどの場合、論文をMarkdown形式で再構成する必要があります。

:::tip
TypeScript, MarkdownのフォーマッタをVSCodeの拡張機能で追加することをおすすめします。
:::

## Viticleのダウンロード

<https://github.com/petaxa/viticle/releases/latest>の`Assets`からあなたの環境で解凍できる圧縮ファイルを選びダウンロードしてください。このとき、解凍したファイルそれ自体が本体となるので適切な場所で解凍することを推奨します。

## Viticleの初期セットアップ

コマンドラインツールで解凍した`viticle`フォルダに移動し、以下のコマンドを実行してください。

```sh
npm install
```

## Vitecleの起動

以下のコマンドを順に実行することで起動できます。試しに起動してみましょう。

```sh
npm run docs:build
npm run docs:preview
```

`docs:preview`コマンドの実行後にURLが表示されます。ブラウザでアクセスするとViticleのトップページが表示されるはずです。

:::info
URLは`http://localhost:xxxx/`といった形式になっているはずです。
また、VSCodeのターミナルで実行している場合、表示されたURLを`CTRL + クリック`することでアクセスすることができます。
:::
