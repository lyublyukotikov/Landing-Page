<script setup lang="ts">
import IShadowedText from '@/components/atoms/core/IShadowedText.vue'

const lines = ['De', 'signing Future For', 'Your Business']
</script>

<template>
  <section class="container-wrapper justify-center text-center pt-15 md:pt-22 bg-[#5855EE]">
    <IShadowedText :lines="lines" />
  </section>
</template>
