<script setup lang="ts">
import { articlesSummaryHeadingsInfos } from "../src/articlesConfig"
import { useRouter } from "vitepress"

const ary = Object.keys(articlesSummaryHeadingsInfos).map(key => ({ key, ...articlesSummaryHeadingsInfos[key] }))
console.log(ary)
const route = useRouter()

const clickFn = (key: string, head: string) => {
    const path = `/articles/${key}/summary/${head}`
    route.go(path)
}
</script>

<template>
    <div v-for="h in ary">
        <a @click="clickFn(h.key, h.items[0].link)">{{ h.title }}</a>
    </div>
</template>

<!-- TODO: あとはCSS! -->
