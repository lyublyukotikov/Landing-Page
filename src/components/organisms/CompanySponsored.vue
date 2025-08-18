<script setup lang="ts">
import sponsored from '@/assets/Sponsored.svg'
import IImage from '@/components/atoms/IImage.vue'
</script>
<template>
  <section class="container-wrapper mt-15 flex justify-center items-center">
    <IImage :src="sponsored" alt="sponsored" />
  </section>
</template>
