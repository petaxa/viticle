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

        const base = `/articles/${name}/`;
        const items: DefaultTheme.SidebarMulti["path"] = [
            {
                text: "論文全文",
                link: "paper",
            },
        ];
        if (
            articlesSummaryHeadingsInfos[name].items &&
            articlesSummaryHeadingsInfos[name].items[0]
        ) {
            items.push({
                text: "論文要約",
                base: `/articles/${name}/summary/`,
                items: articlesSummaryHeadingsInfos[name].items,
            });
        }

        // sidebarに追加
        sidebar[`/articles/${name}/`] = { base, items };
    });

    // ガイドのサイドバーを追加
    sidebar["/guide/"] = {
        base: "/guide/",
        items: [
            {
                text: "イントロダクション",
                link: "introduction",
            },
            {
                text: "Viticleをはじめる",
                link: "getting-started",
            },
            {
                text: "論文を追加する",
                base: "/guide/add-articles/",
                items: [
                    {
                        text: "新たな論文の追加方法",
                        link: "how-to-add-articles",
                    },
                    {
                        text: "Markdown記法",
                        link: "about-markdown",
                    },
                ],
            },
            {
                text: "others",
                base: "/guide/others/",
                items: [
                    {
                        text: "Node.jsのインストール",
                        link: "install-nodejs",
                    },
                ],
            },
        ],
    };

    return sidebar;
};
