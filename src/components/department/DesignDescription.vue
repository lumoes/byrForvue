<template>
    <section class="relative h-full overflow-hidden text-[#0067D1]">
        <!-- 视差背景文本 -->
        <div
            class="absolute inset-0 -mr-1 flex flex-col justify-center text-right font-poppins-800 italic opacity-20 gap-12 text-6xl sm:gap-8 sm:text-7xl md:gap-5 md:text-8xl lg:justify-between lg:text-9xl">
            <div v-for="(text, index) in parallaxTexts" :key="index"
                class="flex flex-nowrap overflow-hidden whitespace-nowrap tracking-[-2px]">
                <div :style="{
                    transform: `translateX(${text.x}%)`,
                    transition: 'transform 0.1s ease-out'
                }">
                    <span v-for="i in 4" :key="i">{{ text.content }} </span>
                </div>
            </div>
        </div>

        <!-- 主要内容 -->
        <article class="relative h-full flex flex-col justify-between gap-8 sm:gap-11 md:gap-16">
            <section>
                <div
                    class="flex flex-wrap items-center gap-1 border-2 border-[#0067D1] bg-white/40 p-[10px] md:gap-[10px] w-[250px] justify-center sm:w-fit">
                    <img
                        src="../../assets/image/department/design/icon-title.svg"
                        alt="Design Title"
                        style="filter: invert(29%) sepia(98%) saturate(749%) hue-rotate(186deg) brightness(98%)"
                    />
                    <div class="flex flex-col items-center gap-[10px] px-[10px]">
                        <img
                            src="../../assets/image/department/design/icon-saturn.svg"
                            alt="Saturn Icon"
                            style="filter: invert(29%) sepia(98%) saturate(749%) hue-rotate(186deg) brightness(98%)"
                        />
                        <span class="font-dfphei text-xl tracking-[3.25px] sm:text-4xl sm:tracking-[5.4px]">
                            design=__
                        </span>
                    </div>
                </div>
                <div class="w-fit p-[10px] font-dfphei text-5xl tracking-[7.2px]">
                    *找一些新的人做新的__*
                </div>
                <div class="border-2 border-[#0067D1] bg-white/40 px-2 text-2xl leading-none tracking-[3px]">
                    "把一种设想通过合理的规划、周密的计划、通过
                    <span class="underline">各种方式</span>
                    表达出来的过程"
                </div>
            </section>

            <section class="self-end sm:mr-24">
                <div
                    class="w-fit border-2 border-[#0067D1] bg-white/40 px-[9px] text-right text-[32px] leading-[125.5%] tracking-[4px]">
                    <p>#坛服</p>
                    <p>#文创</p>
                    <p>#第二课堂</p>
                </div>
            </section>

            <section class="w-fit border-2 border-[#0067D1]">
                <div class="bg-white/40 text-base leading-[111%] tracking-[2.4px]">
                    只要你喜欢__想了解__，你都可以来定义byrTeam的__
                </div>
                <div class="bg-white/40 text-base leading-[111%] tracking-[2.4px]">
                    用你的作品和想法打动我们
                </div>
            </section>
        </article>
    </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from 'vue'


const parallaxTexts = reactive([
    { content: 'GRAPHIC', x: -20, baseVelocity: -5 },
    { content: 'PRODUCT', x: -20, baseVelocity: 5 },
    { content: 'INTERACTION', x: -20, baseVelocity: -5 },
    { content: 'WHATEVER', x: -20, baseVelocity: 5 }
])

let animationId: number
let lastTime = 0
let lastScrollY = 0

const wrap = (min: number, max: number, v: number): number => {
    const rangeSize = max - min
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

const animate = (timestamp: number) => {
    const delta = timestamp - lastTime || 16
    lastTime = timestamp

    const currentScrollY = window.scrollY
    const scrollVelocity = (currentScrollY - lastScrollY) / (delta / 1000)
    lastScrollY = currentScrollY

    const velocityFactor = Math.min(Math.max(scrollVelocity / 1000 * 2, -2), 2)

    parallaxTexts.forEach((text) => {
        const direction = scrollVelocity < 0 ? -1 : scrollVelocity > 0 ? 1 : 1
        let moveBy = direction * text.baseVelocity * (delta / 1000)
        moveBy += direction * moveBy * Math.abs(velocityFactor)

        text.x += moveBy
        text.x = wrap(-45, -20, text.x)
    })

    animationId = requestAnimationFrame(animate)
}

onMounted(() => {
    animationId = requestAnimationFrame(animate)
})

onUnmounted(() => {
    if (animationId) {
        cancelAnimationFrame(animationId)
    }
})
</script>
