<template>
    <section ref="sectionRef" :style="animationStyle" :class="[
        'mx-auto max-w-[1280px] pt-12 px-4 sm:px-10'
    ]">
        <ChalkTitle title="关于BYR-Team" />
        <div class="mt-3 space-y-4 px-6 py-3 text-sm leading-loose sm:space-y-2 sm:py-9 lg:text-base">
            <p class="relative w-fit">
                北邮人团队是一个充满活力和创意的大家庭，北邮人团队由技术、设计、产品和新媒体4个大组组成，汇集着来自各个专业背景的优秀学子。在这里，你将有机会结识志同道合的朋友，分享彼此的想法，一起成长。每个组都有不同的分工和任务，每个组也都有各自的特色和风格。无论你是技术控，还是气氛组，是爱热闹，还是享受奋斗，你都能在北邮人团队找到你大展宏图的地方。

                <img src="../assets/about/asterisk.svg" alt="star" class="absolute -right-8 top-0 w-6 h-6" />
            </p>
            <p>
                有人称北邮人为第二神秘的团队，但其实北邮人做的一切早已和大家结缘。或许是你在北邮人论坛上的吐槽，或许是你预约的健身房，抑或是你在第二课堂上的签到......它们背后都有一群人在默默开发和维护，我们努力延续这些产品的生命力，并在此基础上为大家设计更好的功能。
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import ChalkTitle from '../components/common/ChalkTitle.vue'

// 响应式数据
const sectionRef = ref<HTMLElement>()
const isVisible = ref(false)

// 动画样式
const animationStyle = computed(() => ({
    transform: `translateY(${isVisible.value ? '0' : '100px'})`,
    opacity: isVisible.value ? 1 : 0,
    transition: 'all 0.5s ease-in-out'
}))

// 监听元素是否进入视口
useIntersectionObserver(
    sectionRef,
    ([{ isIntersecting }]) => {
        if (isIntersecting) {
            isVisible.value = true
        }
    },
    { threshold: 0.1 }
)
</script>
