<template>
    <section v-motion :initial="{ y: 100, opacity: 0 }" :enter="{ y: 0, opacity: 1 }"
        :transition="{ duration: 800, ease: 'easeInOut' }" :intersect-once="true" class="mx-auto pt-12">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-10">
            <ChalkTitle title="招新公告与招新流程" />
        </div>
        <div class="mt-10 flex justify-center">
            <img src="../assets/image/process/process-desktop-2024.svg" class="hidden md:block" alt="桌面端图片" />
            <img src="../assets/image/process/process-mobile-2024.svg" class="block md:hidden" alt="移动端图片" />
        </div>
    </section>
</template>

<script setup lang="ts">
import ChalkTitle from '@/components/common/ChalkTitle.vue'
</script>
