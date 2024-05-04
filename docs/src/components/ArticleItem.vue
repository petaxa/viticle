<script setup lang="ts">
import VPLink from "vitepress/dist/client/theme-default/components/VPLink.vue"

defineProps<{
    title: string
    link: string
}>()

</script>

<template>
    <VPLink class="VPFeature" :href="link" :no-icon="false" tag="a">
        <article class="box">
            <span class="title" v-html=title></span>
        </article>
    </VPLink>
</template>

<style scoped>
.VPFeature {
    display: block;
    border: 1px solid var(--vp-c-bg-soft);
    border-radius: 12px;
    height: 100%;
    background-color: var(--vp-c-bg-soft);
    transition: border-color 0.25s, background-color 0.25s;
    margin: 5px 0;
}

.VPFeature.link:hover {
    border-color: var(--vp-c-brand-1);
}

.box {
    display: flex;
    flex-direction: column;
    padding: 24px;
    height: 100%;
}

.box> :deep(.VPImage) {
    margin-bottom: 20px;
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border-radius: 6px;
    background-color: var(--vp-c-default-soft);
    width: 48px;
    height: 48px;
    font-size: 24px;
    transition: background-color 0.25s;
}

.title {
    line-height: 24px;
    font-size: 16px;
    font-weight: 600;
}

.details {
    flex-grow: 1;
    padding-top: 8px;
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-2);
}

.link-text {
    padding-top: 8px;
}

.link-text-value {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-brand-1);
}

.link-text-icon {
    margin-left: 6px;
}
</style>
