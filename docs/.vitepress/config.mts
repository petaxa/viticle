import { defineConfig } from "vitepress";
import { sidebarFactory } from "../src/utils/sidebarFactory";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Viticle",
    description: "A Quick and Beautiful Article Viewer",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "論文一覧", link: "/articles/index.md" },
            {
                text: "ガイド",
                link: "https://petaxa.github.io/guide/introduction.html",
            },
        ],

        sidebar: sidebarFactory(),

        socialLinks: [
            { icon: "github", link: "https://github.com/petaxa/viticle" },
        ],
    },
    markdown: {
        math: true,
    },
});
