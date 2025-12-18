<template>
    <section class="relative h-full">
        <div class="relative">
            <div :class="[styles.TechBG, 'overflow-x-hidden']">
                <p v-for="(binaryString, index) in binaryStrings" :key="index">
                    {{ binaryString }}
                </p>
            </div>
            <div class="absolute bottom-0 flex flex-col items-start">
                <img src="../../assets/image/department/tech/hacker.svg" alt="HackerSVG" style="max-width:512px; height:auto;" />
                <ChalkTitle content="下一个可能就是你。" class="absolute bottom-24 left-0 hidden md:block" />
            </div>
            <article class="absolute right-0 top-1/2 flex max-w-[600px] -translate-y-1/2 flex-col gap-12">
                <BorderParagraph content="在北邮，有这样一群人，他们专注于高性能、高体验的校内公共服务开发，为校内活动、师生便利提供技术支持" />
                <ChalkTitle content="我们是北邮人团队技术组" />
                <BorderParagraph content="快捷方便的研效体系、敏捷健壮的基础架构、随意自在的工作氛围，我们在技术领域不断探索、挑战自我、开拓进取。心怀热忱，守正创新，技术组期待你的加入" />
                <ChalkTitle content="下一个可能就是你。" class="absolute -bottom-12 block md:hidden" />
            </article>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, defineComponent, h } from 'vue'
import HackerSVG from '@/assets/image/department/tech/hacker.svg'
import styles from './style.module.scss'
import BorderParagraph from './BorderParagraph.vue'

const binaryStrings = [
    '110011100001001 1000111111011001 1101',
    '111111110100100 100111010111010 1111111100001100',
    '111011010000100 111100000010100 110010101001000',
    '110011000101111 101001100010111 100100001010',
    '101001111010110 11000000000010 11011110',
    '1010 101111111000011 110000000000000 111000011',
    '101111111110001 1111111100001100 10110111000',
    '111011010000100 101001010100000 101000101100101',
    '110011100011111 101111110000101 10011110110',
    '111110100100010 11000000000001 10000001',
    '110001000011000 1000000111101010 11000100001',
    '101001111010110 11000000000010 11010000',
    '101111100000000 110001011010011 100011111101',
    '11000000000001 110001100010001 110001000011000',
    ' 101110111100101 100111101011100 110110000',
    '101001010100000 101000101100101 1100000000',
    '100111011101100 101011100101000 11000101',
    '110011110110110 110011110000100 11000000000',
    '1010 110001000010001 100111011101100',
    '110001100000001 11000000000010 11011110',
    '110010110111001 100111110111111 101011',
    '111111011000100 11000000000010 1101 1010 101111',
    '1110100010 111110100100010 110101110 1100',
    '0000000010 1101 1010 101111111000011 0101',
    '101011100101000 101001100010111 10010000101',
    '101110001000 110101101100011 101000001000',
    '110110000011011 101011011110100 111111110000',
    '110001100000001 11000000000010 1101 1010 1100',
    '110011100001001 1000111111011001 1101',
    '111111110100100 100111010111010 1111111100001100',
    '111011010000100 111100000010100 110010101001000',
    '110011000101111 101001100010111 100100001010',
    '101001111010110 11000000000010 11011110',
    '1010 101111111000011 110000000000000 111000011',
    '101111111110001 1111111100001100 10110111000',
]

const ChalkTitle = defineComponent({
    props: {
        content: {
            type: String,
            default: ''
        },
        class: {
            type: String,
            default: ''
        }
    },
    setup(props, { slots }) {
        return () => h('div', { class: props.class }, [
            h('div', { class: 'relative w-fit px-3' }, [
                h('div', { class: 'absolute inset-0 -skew-x-6 bg-[#0067D1]' }),
                h('span', {
                    class: 'relative font-smiley text-lg leading-[134.5%] tracking-[0.18px] text-white'
                }, slots.default ? slots.default() : props.content)
            ])
        ])
    }
})
</script>
