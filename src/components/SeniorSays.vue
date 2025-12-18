<template>
    <section ref="sectionRef" class="mx-auto pt-12" :style="animationStyle">
        <div class="mx-auto max-w-[1280px] px-4 sm:px-10">
            <ChalkTitle title="学长学姐说" />
        </div>

        <div class="mt-3 h-fit py-3 sm:py-9">
            <div class="relative">
                <div class="overflow-hidden" ref="emblaRef">
                    <div class="ml-32 flex touch-pan-y gap-6 sm:ml-0 sm:gap-12">
                        <Cards />
                    </div>
                </div>

                <!-- 渐变遮罩 -->
                <div
                    class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#F5F5F5] to-transparent max-sm:hidden">
                </div>
                <div
                    class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#F5F5F5] to-transparent max-sm:hidden">
                </div>

                <!-- 导航按钮 -->
                <div
                    class="pointer-events-none absolute inset-x-0 bottom-1/2 flex translate-y-1/2 justify-between sm:bottom-2 sm:right-20 sm:translate-y-0 sm:justify-end sm:gap-8 [&>button]:pointer-events-auto">
                    <button :class="prevButtonClass" @click="scrollPrev" :disabled="prevBtnDisabled">
                        <IconArrow />
                    </button>
                    <button :class="nextButtonClass" @click="scrollNext" :disabled="nextBtnDisabled">
                        <IconArrow />
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import EmblaCarousel, { type EmblaCarouselType } from 'embla-carousel'
// import Autoplay from 'embla-carousel-autoplay'
import ChalkTitle from '@/components/common/ChalkTitle.vue'
import Cards from './seniorsays/Cards.vue'
import IconArrow from '@/assets/image/senpai-saying/icon-arrow.svg'

// 响应式数据
const emblaRef = ref<HTMLElement>()
const sectionRef = ref<HTMLElement>()
const emblaApi = ref<EmblaCarouselType>()
const prevBtnDisabled = ref(true)
const nextBtnDisabled = ref(true)
const isVisible = ref(false)

// 动画样式
const animationStyle = computed(() => ({
    transform: `translateY(${isVisible.value ? '0' : '100px'})`,
    opacity: isVisible.value ? 1 : 0,
    transition: 'all 0.8s ease-in-out'
}))


const prevButtonClass = computed(() => [
    'scale-x-[-1] rounded-full p-3 sm:shadow-md',
    {
        'text-[#83838] sm:bg-white sm:hover:bg-[#175DDC] sm:hover:text-white': !prevBtnDisabled.value,
        'cursor-not-allowed text-zinc-400 sm:bg-zinc-300': prevBtnDisabled.value,
    }
])

const nextButtonClass = computed(() => [
    'rounded-full p-3 sm:shadow-md',
    {
        'text-[#83838] sm:bg-white sm:text-[#838383] sm:hover:bg-[#175DDC] sm:hover:text-white': !nextBtnDisabled.value,
        'cursor-not-allowed text-zinc-400 sm:bg-zinc-300': nextBtnDisabled.value,
    }
])


const scrollPrev = () => {
    if (emblaApi.value) {
        emblaApi.value.scrollPrev()
    }
}

const scrollNext = () => {
    if (emblaApi.value) {
        emblaApi.value.scrollNext()
    }
}


const onSelect = (api: EmblaCarouselType) => {
    prevBtnDisabled.value = !api.canScrollPrev()
    nextBtnDisabled.value = !api.canScrollNext()
}

// 初始化轮播
onMounted(async () => {
    await nextTick()

    if (emblaRef.value) {
        emblaApi.value = EmblaCarousel(
            emblaRef.value,
            {
                loop: false,
                align: 'center',
                containScroll: false,
            }
        )

        onSelect(emblaApi.value)
        emblaApi.value.on('reInit', onSelect)
        emblaApi.value.on('select', onSelect)
    }
})

useIntersectionObserver(
    sectionRef,
    ([{ isIntersecting }]) => {
        if (isIntersecting) {
            isVisible.value = true
        }
    },
    { threshold: 0.1 }
)

// 清理资源
onUnmounted(() => {
    if (emblaApi.value) {
        emblaApi.value.destroy()
    }
})
</script>
