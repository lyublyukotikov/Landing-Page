<script setup lang="ts">
import ShadowedText from '@/components/atoms/ShadowedText.vue'

const lines = ['De', 'signing Future For', 'Your Business']
</script>

<template>
  <section class="container-wrapper justify-center text-center pt-15 md:pt-22 bg-[#5855EE]">
    <ShadowedText :lines="lines" />
  </section>
</template>
