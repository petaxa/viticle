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

    return sidebar;
};
