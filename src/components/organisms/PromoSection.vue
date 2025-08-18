<script setup lang="ts">
import AboutBlock from '@/components/molecules/AboutBlock.vue'
import IImage from '@/components/atoms/IImage.vue'
import chartImage from '@/assets/chart-image.svg'
import gradientBackground from '@/assets/gradient-background.svg'
</script>
<template>
  <section
    class="relative flex flex-col xl:flex-row justify-center items-center container-wrapper mt-40 sm:mt-90 md:mt-110 lg:mt-129 sm:gap-8 lg:gap-15"
  >
    <IImage :src="gradientBackground" alt="gradient" class="gradient-background w-97 h-64" />
    <IImage :src="chartImage" alt="chart" class="w-150 h-120" />
    <AboutBlock />
  </section>
</template>
<style scoped lang="scss">
.gradient-background {
  position: absolute;
  left: -2%;
  top: 0%;
  transform: translateY(50%);
  z-index: -1;
}

@media (max-width: 1277px) {
  .gradient-background {
    left: 16%;
  }
}

@media (max-width: 480px) {
  .gradient-background {
    left: -9%;
  }
}
</style>
