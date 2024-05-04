type summaryHeading = {
    text: string;
    link: string;
};

/**
 * 論文要約の見出しに関する情報
 */
export type articleSummaryHeadingsInfo = {
    [key: string]: {
        items: summaryHeading[];
        title: string;
    };
};
