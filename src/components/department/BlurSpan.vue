<template>
    <span :class="['w-fit rounded-lg p-[10px] text-lg tracking-[3.6px] text-[#333] sm:text-2xl blur-bg', customClass]">
        {{ content }}
    </span>
</template>

<script setup>
const props = defineProps({
    content: String,
    class: {
        type: String,
        default: ''
    }
})

const customClass = props.class
</script>

<style scoped lang="scss">
.blur-bg {
    backdrop-filter: blur(8px);
    background: rgba(255, 255, 255, 0.5);
}
</style>