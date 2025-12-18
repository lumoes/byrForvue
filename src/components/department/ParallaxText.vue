<template>
    <div
        class="flex flex-nowrap overflow-hidden whitespace-nowrap tracking-[-2px] text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
        <div ref="textRef" :style="{ transform: `translateX(${x}%)` }">
            <span>{{ children }} </span>
            <span>{{ children }} </span>
            <span>{{ children }} </span>
            <span>{{ children }} </span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    children: String,
    baseVelocity: {
        type: Number,
        default: 100
    }
});

const textRef = ref();
const x = ref(0);
const baseX = ref(0);
const directionFactor = ref(1);
const prevScrollY = ref(0);
const scrollVelocity = ref(0);
const smoothVelocity = ref(0);
let animationId = null;
let prevTime = 0;

function wrap(min, max, v) {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

function handleScroll() {
    const currentScrollY = window.scrollY;
    scrollVelocity.value = currentScrollY - prevScrollY.value;
    prevScrollY.value = currentScrollY;
}

function animate(currentTime) {
    if (prevTime === 0) prevTime = currentTime;
    const delta = currentTime - prevTime;
    prevTime = currentTime;

    // 更新平滑速度
    smoothVelocity.value += (scrollVelocity.value - smoothVelocity.value) * 0.1;

    // 基础移动量
    let moveBy = directionFactor.value * props.baseVelocity * (delta / 1000);

    // 根据滚动方向调整方向因子
    if (smoothVelocity.value < 0) {
        directionFactor.value = -1;
    } else if (smoothVelocity.value > 0) {
        directionFactor.value = 1;
    }

    // 添加速度影响
    const clampedVelocity = Math.min(Math.max(Math.abs(smoothVelocity.value), 0), 1000);
    const velocityFactor = (clampedVelocity / 1000) * 5;
    moveBy += directionFactor.value * moveBy * velocityFactor;

    // 更新位置
    baseX.value += moveBy;
    x.value = wrap(-20, -45, baseX.value);

    // 重置滚动速度（因为scroll事件可能不连续触发）
    scrollVelocity.value *= 0.95;

    animationId = requestAnimationFrame(animate);
}

onMounted(() => {
    prevScrollY.value = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    animationId = requestAnimationFrame(animate);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
});
</script>
