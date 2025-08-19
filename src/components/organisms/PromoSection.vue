<script setup lang="ts">
import AboutBlock from '@/components/molecules/AboutBlock.vue'
import IImage from '@/components/atoms/IImage.vue'
</script>
<template>
  <section
    class="relative flex flex-col xl:flex-row justify-center items-center container-wrapper mt-40 sm:mt-90 md:mt-110 lg:mt-129 sm:gap-8 lg:gap-15"
  >
    <IImage
      src="/assets/gradient-background-image.svg"
      alt="gradient"
      class="gradient-background-image w-100 h-65"
    />
    
    <IImage
      src="/assets/chart-image.svg"
      alt="chart"
      class="w-150 h-120"
    />
    
    <AboutBlock />
  </section>
</template>

<style scoped lang="scss">
.gradient-background-image {
  position: absolute;
  z-index: -1;
  left: -2%;
  top: 0%;
  transform: translateY(50%);
}

@media (max-width: 1277px) {
  .gradient-background-image {
    left: 16%;
  }
}

@media (max-width: 480px) {
  .gradient-background-image {
    left: -9%;
  }
}
</style>
