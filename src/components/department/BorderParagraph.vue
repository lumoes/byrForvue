<template>
    <div :class="className">
        <p
            class="border border-[#0067D1] bg-white/40 text-xl font-semibold leading-[154%] tracking-[0.2px] text-[#0067D1]">
            <slot>{{ content }}</slot>
        </p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    content?: string
    className?: string
}

withDefaults(defineProps < Props > (), {
    content: '',
    className: ''
})
</script>
