<template>
  <div id="app">
    <Header :is-transparent="isHeaderTransparent" />
    <HeroSection />
    <AboutSection />
    <ProductsSection />
    <DepartmentSection />
    <TestimonialSection />
    <JointReason />
    <SeniorSays />
    <RecruitmentSection />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProductsSection from './components/ProductsSection.vue'
import DepartmentSection from './components/DepartmentSection.vue'
import TestimonialSection from './components/TestimonialSection.vue'
import RecruitmentSection from './components/RecruitmentSection.vue'
import JointReason from './components/department/JointReason.vue'
import SeniorSays from './components/SeniorSays.vue'
import Footer from './components/Footer.vue'

import { ref, onMounted, onUnmounted } from 'vue'

const isHeaderTransparent = ref(true)
const handleScroll = () => {
  // 当滚动超过HeroSection时，Header变为非透明
  const heroHeight = window.innerHeight
  isHeaderTransparent.value = window.scrollY < heroHeight * 0.8
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
    background-color: rgb(245, 245, 245);
}
</style>
<DepartmentSection :departments="departmentsData" />