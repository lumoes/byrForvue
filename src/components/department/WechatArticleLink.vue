<template>
    <div class="flex items-start gap-1">
        <a class="leading-[180%] underline max-sm:text-sm sm:text-lg" :href="href" rel="noreferrer noopener"
            target="_blank">
            {{ content }}
        </a>
        <IconPencil />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    href: string
    content: string
}>()

const href = props.href
const content = props.content
</script>