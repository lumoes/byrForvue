<template>
    <header :class="headerClass">
        <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
            <img src="../assets/byrteam-logo.svg" alt="BYR Team Logo" class="h-10 transition-all duration-300"
                :class="logoClass" />
            <ul class="flex space-x-8">
                <li><a href="" :class="linkClass">北邮人论坛</a></li>
                <li><a href="" :class="linkClass">北邮人 PT</a></li>
                <li><a href="" :class="linkClass">BYRIO 技术社区</a></li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps<{
    isTransparent?: boolean
}>()

const headerClass = computed(() =>
    props.isTransparent
        ? 'fixed top-0 w-full bg-transparent z-50 transition-all duration-300'
        : 'fixed top-0 w-full bg-white/60 backdrop-blur-lg z-50 transition-all duration-300'
)

const logoClass = computed(() =>
    props.isTransparent
        ? 'brightness-0 invert' // 将 logo 转为白色
        : '' // 保持原色（黑色）
)

const linkClass = computed(() =>
    props.isTransparent
        ? 'text-white hover:text-blue-300 transition-colors duration-300'
        : 'text-gray-800 hover:text-blue-600 transition-colors duration-300'
)
</script>
