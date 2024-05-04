import { articleSummaryHeadingsInfo } from "./utils/type";

/**
 * 要約の見出し情報
 */
export const articlesSummaryHeadingsInfos: articleSummaryHeadingsInfo = {
    demo1: {
        title: "でもいち",
        items: [
            { text: "H1Demo1", link: "headone" },
            { text: "H2Demo1", link: "headtwo" },
        ],
    },
    demo2: {
        title: "でもに",
        items: [
            { text: "H1Demo2", link: "headone" },
            { text: "H2Demo2", link: "headtwo" },
        ],
    },
    // NOTE: 新規登録手順: ここに論文フォルダ名、見出しテキスト、要約ファイルパスを追加
};
