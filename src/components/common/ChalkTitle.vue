<template>
    <div class="relative block w-fit">
        <!-- 蓝色渐变高亮背景 -->
        <div class="absolute bottom-0 h-3/5 w-[calc(130%)] -skew-x-12 bg-gradient-to-r from-[#0067D1A6] to-[#D9D9D900]">
        </div>
        <!-- 标题文本 -->
        <h2 class="font-smiley relative text-3xl italic">{{ title }}</h2>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string
}

defineProps<Props>()
</script>
