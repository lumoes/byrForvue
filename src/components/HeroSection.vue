<template>
    <section class="relative">
        <!-- 背景轮播 -->
        <div class="absolute inset-x-0">
            <div class="relative overflow-hidden h-screen sm:min-h-[700px]" ref="carouselRef">
                <div class="flex touch-pan-y transition-transform duration-500 ease-out"
                    :style="{ transform: `translateX(-${currentSlide * 100}%)` }">

                    <div v-for="(bg, index) in backgrounds" :key="index" class="flex-[0_0_100%]">
                        <img :src="bg.src" :alt="bg.alt"
                            class="h-screen sm:min-h-[700px] w-full object-cover select-none" />
                    </div>
                </div>
            </div>

        </div>

        <!-- 内容区域 -->
        <div
            class="relative box-border flex h-screen w-fit items-center bg-gradient-to-r from-black/40 to-transparent pl-8 pr-10 pt-[70px] sm:min-h-[700px] sm:pl-20 sm:pr-40 sm:pt-[84px]">
            <div class="max-w-[564px] flex-col gap-14 space-y-4 text-white">

                <div class="text-[50px] leading-normal sm:text-[64px] font-bold">
                    <p>We want you:</p>
                    <p class="flex flex-wrap [&>span]:shrink-0">
                        <span>我们在这里，</span>
                        <span>等风也等你</span>
                    </p>
                </div>


                <div class="space-y-4 font-medium">
                    <p>
                        成立于2000年初，北邮人团队已经陪伴了北邮师生20年有余。我们一直致力于服务北邮人，为北邮师生提供更加便利的服务，一代代北邮人薪火传承北邮人的服务实干精神，用青春书写北邮人的辉煌历程。而现在，无论你是新生还是老司机，只要你怀揣梦想，热爱探索，我们都欢迎你的加入！北邮人总有适合你的地方，让我们一起书写精彩的青春篇章！We
                        Want You！
                    </p>
                    <p class="mt-3">
                        想加入BYR Team？请将简历投递至邮箱
                        <a href="mailto:join@byr.ink" rel="noreferrer noopener" target="_blank"
                            class="pointer-events-auto ml-1 underline">
                            join@byr.ink
                        </a>
                    </p>
                </div>


                <div class="flex justify-start mr-0 sm:mr-auto">
                    <a class="pointer-events-auto mb-4 inline-block w-fit rounded-full bg-white/40 backdrop-blur px-10 py-5 sm:px-8 sm:py-4 transition-all hover:bg-white/60"
                        href="mailto:join@byr.ink" rel="noreferrer noopener" target="_blank">
                        加入我们
                    </a>
                </div>
            </div>
        </div>


        <div v-if="showToast" :class="[
            'fixed top-4 right-4 z-50 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300',
            toastType === 'success' ? 'bg-green-500' : 'bg-red-500'
        ]">
            {{ toastMessage }}
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'


const backgrounds = ref([
    {
        src: '/src/assets/image/demo-hero-bg.1a3a89ae.jpg', // 请确保图片路径正确
        alt: 'BYR Team Hero Background'
    }
])

// 轮播状态
const currentSlide = ref(0)
const carouselRef = ref<HTMLElement>()

const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref<'success' | 'error'>('success')



</script>



<style scoped>
/* 可以添加自定义样式 */
</style>
