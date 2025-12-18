<template>
    <section ref="sectionRef" :class="[
        'mx-auto max-w-[1280px] pt-12',
        'px-4',
        'sm:px-10'
    ]">
        <ChalkTitle title="加入byrTeam的N个理由" />
        <div :class="[
            'mx-auto mt-3 flex items-center justify-center py-3 sm:py-9',
            'flex-col gap-6',
            'sm:flex-row sm:gap-3',
            'lg:gap-6'
        ]">
            <div v-for="(reason, index) in reasons" :key="`${reason.title}+${index}`"
                class="relative mx-auto flex max-w-[344px] flex-col items-center self-stretch sm:basis-1/3">
                <component :is="reason.icon" :class="[
                    'z-10 mx-auto shrink-0',
                    '-mb-6 h-[80px]',
                    'sm:-mb-8 sm:h-[100px]',
                    'lg:-mb-20 lg:h-[150px]'
                ]" />
                <div :class="[
                    'grow rounded-2xl bg-white text-center',
                    'px-6 pb-6 pt-[30px]',
                    'sm:px-6 sm:pb-6 sm:pt-[40px]',
                    'lg:px-12 lg:pb-9 lg:pt-[100px]'
                ]">
                    <h3 :class="[
                        'font-smiley',
                        'text-[20px]',
                        'sm:text-[24px]',
                        'lg:text-[28px]'
                    ]">
                        {{ reason.title }}
                    </h3>
                    <p :class="[
                        'mt-5 text-xs text-[#585858]',
                        'sm:text-sm',
                        'lg:text-base'
                    ]">
                        {{ reason.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMotion } from '@vueuse/motion'
import ChalkTitle from '@/components/common/ChalkTitle.vue'

import IconFree from '@/assets/image/join-team/icon-free.svg'
import IconHarvest from '@/assets/image/join-team/icon-harvest.svg'
import IconClap from '@/assets/image/join-team/icon-clap.svg'

interface Reason {
    icon: any
    title: string
    description: string
}

const reasons: Reason[] = [
    {
        icon: IconFree,
        title: '开放自由',
        description:
            '自由开放的文化氛围让你的声音会被认真聆听，你可以与整个团队的同学进行思想碰撞，点燃创意的火花。在这里，你遇到的不只是学长学姐，更是并肩作战的伙伴。',
    },
    {
        icon: IconHarvest,
        title: '收获满满',
        description:
            '无论你想提升自己的coding能力、产品思维能力还是交互设计能力，这里都有手握多个大厂offer的学长学姐手把手教学。从0到1带你做项目，成为你简历上最亮眼的一笔！',
    },
    {
        icon: IconClap,
        title: '发挥价值',
        description:
            '这里有梦和追梦的勇气，我们为每一个有想法的同学搭建舞台，赋予把思考变为现实以满足用户需求的勇气和能力。好的内容，值得被更多人看见！',
    },
]

const sectionRef = ref<HTMLElement>()

onMounted(() => {
    if (sectionRef.value) {
        useMotion(sectionRef.value, {
            initial: { y: 100, opacity: 0 },
            visibleOnce: { y: 0, opacity: 1 },
            transition: {
                duration: 800,
                ease: 'easeInOut'
            }
        })
    }
})
</script>
