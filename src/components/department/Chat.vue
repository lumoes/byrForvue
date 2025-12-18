<template>
    <div :class="chatClass">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    isYou?: boolean
    isLast?: boolean
    class?: string
}>()



const chatClass = computed(() => [
    'w-fit px-5 py-2 max-sm:text-sm sm:text-lg',
    props.class,
    {
        'bg-[#4AA3FF]': props.isYou,
        'bg-[#FFF] shadow-[0_0_4px_0] shadow-[#DEE6F2]': !props.isYou,
        'rounded-l-[24px] rounded-br-[24px] rounded-tr-[4px]': props.isYou && props.isLast,
        'rounded-l-[24px] rounded-r-[4px]': props.isYou && !props.isLast,
        'rounded-r-[24px] rounded-bl-[24px] rounded-tl-[4px]': !props.isYou && props.isLast,
        'rounded-l-[4px] rounded-r-[24px]': !props.isYou && !props.isLast,
    }
])
</script>