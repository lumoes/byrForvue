<template>
    <p v-html="content"></p>
</template>

<script setup>
defineProps({
    content: {
        type: String,
        required: true
    }
})
</script>
