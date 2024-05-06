import { defineConfig } from "vitepress";
import { sidebarFactory } from "../src/utils/sidebarFactory";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Viticle",
    titleTemplate: ":title | Viticle",
    description: "A Quick and Beautiful Article Viewer",
    head: [
        [
            "link",
            { rel: "icon", type: "image/svg+xml", href: "art/viticle.svg" },
        ],
        // ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: { src: "art/viticle.svg", width: 24, height: 24 },
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
