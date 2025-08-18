<script setup lang="ts">
import mapImage from '@/assets/map-image.png'
import IImage from '@/components/atoms/IImage.vue'
</script>
<template>
  <section class="container-wrapper mt-20 md:mt-44 justify-center">
    <IImage class="w-120 h-60 lg:w-160 lg:h-80 xl:w-265 xl:h-134" :src="mapImage" alt="Map" />
  </section>
</template>
