<template>
    <section class="mx-auto max-w-[1280px] pt-12 px-4 sm:px-10">
        <ChalkTitle title="我们的产品" />

        <div class="mt-8 flex flex-col gap-6">
            <!-- 产品选择器 -->
            <div class="flex flex-wrap justify-center gap-4 lg:justify-around">
                <div v-for="(service, index) in services" :key="index"
                    class="relative cursor-pointer p-2 rounded-xl transition-all duration-300"
                    :class="selected === index ? 'bg-blue-100 scale-110' : 'hover:bg-gray-100'"
                    @click="selected = index">
                    <img :src="service.image" :alt="service.name"
                        :class="selected === index ? 'w-20 h-20' : 'w-16 h-16'" class="transition-all duration-300" />
                </div>
            </div>

            <!-- 产品详情 -->
            <div class="bg-white rounded-lg p-6 shadow-md">
                <div class="flex items-center justify-between mb-2">
                    <div class="title-underline">
                        <h3 class="text-xl font-bold">{{ services[selected].name }}</h3>
                        <img src="../assets/image/service/underline.svg" alt="underline" class="underline-svg" />
                    </div>
                    <a v-if="services[selected].url" :href="services[selected].url" target="_blank"
                        class="inline-block text-blue-600 hover:underline whitespace-nowrap">
                        <img class="svg-blue" src="../assets/image/service/icon-arrow-tr.svg" alt="访问" />
                    </a>
                </div>
                <p class="text-blue-600 italic mb-3">{{ services[selected].slogan }}</p>
                <div v-html="services[selected].description" class="text-gray-700"></div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChalkTitle from '../components/common/ChalkTitle.vue'


import { services } from './service_data'
const selected = ref(0)

</script>

<style>
.svg-blue {
    filter: invert(34%) sepia(98%) saturate(747%) hue-rotate(191deg) brightness(97%) contrast(101%);
}

.title-underline {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.underline-svg {
    margin-top: 4px;
    width: 120px;
    height: auto;
    display: block;
}


</style>