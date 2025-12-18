<template>
    <div class="relative block w-fit">
        <div
            class="absolute bottom-0 box-content h-3/5 w-full pr-8 bg-gradient-to-r from-[#DAFF47] to-[#D9D9D900] opacity-40">
        </div>
        <div class="relative whitespace-nowrap text-center leading-[180%] max-sm:text-base sm:text-xl">
            {{ content }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    content: string
}>()

const content = props.content
</script>