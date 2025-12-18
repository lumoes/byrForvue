<template>
    <section ref="sectionRef" :style="animationStyle" class="mx-auto max-w-[1280px] pt-12 px-4 sm:px-10">
        <ChalkTitle title="部门介绍" />

        <!-- 部门选择器 -->
        <div class="mt-3 overflow-hidden py-3 sm:py-9">
            <div class="flex flex-col gap-3 rounded-2xl bg-white p-3 sm:p-6 lg:flex-row">
                <!-- 导航栏 -->
                <nav class="rounded-xl bg-[#F5F5F5] p-3 sm:p-3 lg:p-6">
                    <ul class="flex h-full justify-between sm:gap-4 lg:flex-col lg:gap-6">
                        <li v-for="({ name, icon, content }, index) in shuffledDepartments" :key="`${name}-${index}`"
                            :class="[
                                'flex basis-1/4 cursor-pointer flex-col items-center justify-center sm:flex-row',
                                'gap-1 sm:gap-0',
                                {
                                    'font-extrabold text-[#0067D1]': index === selected,
                                    'text-[#A8A8A8] hover:text-zinc-500': index !== selected,
                                }
                            ]" @click="setSelected(index)">
                            <!-- 移动端图标 -->
                            <component :is="icon" class="block sm:hidden" :width="24" :height="24" />

                            <div :class="[
                                'relative flex w-full items-center justify-center self-stretch text-center',
                                'sm:px-2 sm:py-6 lg:px-3 lg:py-10'
                            ]">
                                <!-- 选中背景动画 -->
                                <div v-if="index === selected" :key="`bg-${selected}`"
                                    class="absolute inset-0 flex items-center justify-center rounded-xl bg-white animate-select-bg">
                                    <component :is="icon" :class="[
                                        'hidden sm:block sm:h-[64px] lg:h-[78px]',
                                        'text-[#0067D1] opacity-20'
                                    ]" />
                                </div>

                                <!-- 部门名称 -->
                                <span :class="[
                                    'relative whitespace-nowrap text-sm transition duration-500',
                                    'sm:text-xl sm:tracking-[3.6px] lg:text-2xl'
                                ]">
                                    {{ name }}
                                </span>
                            </div>
                        </li>
                    </ul>
                </nav>

                <!-- 内容区域 -->
                <main class="relative min-w-0 grow">
                    <Transition name="content-slide" mode="out-in">
                        <div :key="shuffledDepartments[selected].name" class="h-full">
                            <component :is="shuffledDepartments[selected].content" />
                        </div>
                    </Transition>
                </main>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed} from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { shuffle } from 'lodash'
import ChalkTitle from '../components/common/ChalkTitle.vue'
import { departments } from '../components/department/department'


const selected = ref(0)
const isVisible = ref(false)
const sectionRef = ref<HTMLElement>()

// 随机排序的部门列表
const shuffledDepartments = computed(() => shuffle([...departments]))

// 入场动画样式
const animationStyle = computed(() => ({
    transform: `translateY(${isVisible.value ? '0' : '100px'})`,
    opacity: isVisible.value ? 1 : 0,
    transition: 'all 0.8s ease-in-out'
}))


const setSelected = (index: number) => {
    selected.value = index
}

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

<style scoped>
/* 选中背景动画 */
@keyframes selectBgAnimation {
    0% {
        transform: scale(0.8);
        opacity: 0;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.animate-select-bg {
    animation: selectBgAnimation 0.3s ease-out;
}

/* 内容切换动画 */
.content-slide-enter-active {
    transition: all 0.5s ease-out;
}

.content-slide-leave-active {
    transition: all 0.3s ease-in;
}

.content-slide-enter-from {
    opacity: 0;
    transform: translateX(-10px);
}

.content-slide-leave-to {
    opacity: 0;
    transform: translateX(10px);
}

.content-slide-enter-to,
.content-slide-leave-from {
    opacity: 1;
    transform: translateX(0);
}
</style>
