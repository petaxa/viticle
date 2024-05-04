import { DefaultTheme } from "vitepress";
import { articlesSummaryHeadingsInfos } from "../articlesConfig";

export const sidebarFactory = () => {
    // configに成型
    const sidebar: DefaultTheme.SidebarMulti = {};

    // 論文ページのサイドバーを作成
    const articleNames = Object.keys(articlesSummaryHeadingsInfos);
    articleNames.forEach((name) => {
        if (!articlesSummaryHeadingsInfos[name]) {
            throw new Error(
                `${name}がarticlesSummaryHeadingsInfosに登録されていません。`
            );
        }
        sidebar[`/articles/${name}/`] = {
            base: `/articles/${name}/`,
            items: [
                {
                    text: "論文要約",
                    base: `/articles/${name}/summary/`,
                    items: articlesSummaryHeadingsInfos[name].items,
                },
                {
                    text: "論文全文",
                    link: "paper",
                },
            ],
        };
    });

    // ガイドを追加
    sidebar["/guide/"] = {
        base: "/guide/",
        items: [
            {
                text: "はじめに",
                link: "introduction",
            },
        ],
    };

    return sidebar;
};
