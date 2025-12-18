<template>
    <section
        class="relative flex h-full min-h-[548px] w-full flex-col overflow-hidden rounded-xl border-[0.5px] bg-[#F6F8FC] product-bg">
        <div class="mt-auto flex flex-col items-end gap-8 px-[25px] py-[50px]">
            <BlurSpan content="我们的日常工作就是负责对产品进行定义并进行需求分析绘制使用流程图，协调技术、设计部门推进项目开发进度。" class="max-w-[528px]" />
            <BlurSpan content="收集师生需求&整合各类资源&撰写产品需求文档等相关文字材料" />
            <BlurSpan content="欢迎全新的你加入我们，一起构思新的产品，策划新的活动!" class="max-w-[458px]" />
        </div>
    </section>
</template>

<script setup>
import BlurSpan from '@/components/department/BlurSpan.vue'
</script>

<style scoped lang="scss">
.product-bg {
    background-image: url('@/assets/image/department/product/product-bg.png');
    background-size: cover;
    background-position: center;
}
</style>