<script setup lang="ts">
import { articlesSummaryHeadingsInfos } from "../articlesConfig"
import ArticleItem from "./ArticleItem.vue"

const articles = Object.keys(articlesSummaryHeadingsInfos).map(key => {
    const info = articlesSummaryHeadingsInfos[key]
    return {
        title: info.title,
        link: `/articles/${key}/summary/${info.items[0].link}`
    }
})
</script>

<template>
    <h1>論文一覧</h1>
    <h2></h2>
    <div v-for="article in articles">
        <ArticleItem :title="article.title" :link="article.link" />
    </div>
</template>
