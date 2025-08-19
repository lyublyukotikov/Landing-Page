<script setup lang="ts">
import { useBrandLogos } from '@/composables/useBrandLogos'

const { logosBrand } = useBrandLogos()
</script>

<template>
  <div class="flex gap-4">
    <a
      v-for="(logoBrand, index) in logosBrand"
      :key="index"
      :href="logoBrand.url"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
    >
      <component :is="logoBrand.icon" class="w-full h-full" />
    </a>
  </div>
</template>
