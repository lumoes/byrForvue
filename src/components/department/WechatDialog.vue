<template>
    <section :class="['flex max-sm:gap-2 sm:gap-4', customClass, { 'flex-row-reverse': !isYou }]">
        <div class="flex flex-col gap-[6px]">
            <div :class="['flex items-baseline justify-end gap-4', { 'flex-row-reverse': !isYou }]">
                <span class="leading-[180%] opacity-50 max-sm:text-xs sm:text-sm">{{ time }}</span>
                <span class="leading-[180%] text-[#393939] max-sm:text-sm sm:text-lg">{{ name }}</span>
            </div>
            <div :class="['flex flex-col gap-[6px]', { 'text-white': isYou, 'text-black': !isYou }]">
                <slot></slot>
            </div>
        </div>
        <component :is="avatar" :class="[
            'shrink-0',
            'max-sm:h-[36px] max-sm:w-[36px]',
            'sm:h-[56px] sm:w-[56px]'
        ]" />
    </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Component } from 'vue'

const props = defineProps<{
    avatar: Component
    name: string
    time: string
    isYou?: boolean
    class?: string
}>()

const isYou = props.isYou ?? false
const customClass = props.class ?? ''
const avatar = props.avatar
const name = props.name
const time = props.time
</script>