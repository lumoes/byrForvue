<template>
    <div class="relative min-w-0 flex-[0_0_723px] self-end pl-1">
        <div class="relative flex items-center">
            <div class="mx-10 scale-75 max-sm:-mt-7 sm:scale-100">
                <component :is="avatar" />
            </div>
            <div class="-mx-[100px] -mt-5 flex flex-col gap-5 sm:-mx-0 sm:mt-0">
                <div class="flex gap-2 max-sm:flex-col sm:items-end">
                    <span class="font-smiley text-2xl">
                        @{{ name }}「{{ department }}」
                    </span>
                    <span class="inline-block h-fit text-sm text-[#727272]">
                        {{ identity }}
                    </span>
                </div>
                <div class="text-sm max-sm:text-xs">
                    <div class="max-sm:-mx-[12px] max-sm:-mt-4">
                        <div v-for="(item, index) in firstHalfAchievements" :key="`${name}-achievement-${index}`"
                            class="ml-2 inline-block">
                            <ChalkSpan v-if="isChalkSpan(item)" :content="item.content" />
                            <span v-else>{{ item }}</span>
                        </div>
                    </div>
                    <div class="max-sm:-mx-[8px] sm:mt-2">
                        <div v-for="(item, index) in secondHalfAchievements"
                            :key="`${name}-achievement-${index * 2 + 1}`" class="ml-2 inline-block">
                            <ChalkSpan v-if="isChalkSpan(item)" :content="item.content" />
                            <span v-else>{{ item }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="-mt-[72px] mb-8 flex items-end justify-start max-sm:ml-32 max-sm:px-2 sm:justify-end">
            <div
                class="flex flex-auto flex-col items-center justify-center m-2 min-h-[300px] max-w-[554px] rounded-2xl bg-white p-4 px-[50px] py-[45px] sm:min-h-[230px] max-sm:max-w-[320px] max-sm:px-[30px] max-sm:py-[25px]">
                <RichText v-if="isRichText(saying)" :content="saying.content" />
                <p v-else>{{ saying }}</p>
            </div>
            <Quote class="-mb-8 -ml-[46px] max-sm:-ml-[60px] max-sm:scale-50" />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import ChalkSpan from '../department/ChalkSpan.vue'
import RichText from './RichText.vue'
import Quote from '@/assets/image/senpai-saying/quote.svg'

const props = defineProps({
    avatar: {
        required: true
    },
    sex: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    identity: {
        type: String,
        required: true
    },
    achievements: {
        type: Array,
        required: true
    },
    saying: {
        required: true
    }
})

const firstHalfAchievements = computed(() =>
    props.achievements.slice(0, Math.ceil(props.achievements.length / 2))
)

const secondHalfAchievements = computed(() =>
    props.achievements.slice(Math.ceil(props.achievements.length / 2))
)

const isChalkSpan = (item) => {
    return typeof item === 'object' && item?.component === 'ChalkSpan'
}

const isRichText = (item) => {
    return typeof item === 'object' && item?.component === 'RichText'
}
</script>
