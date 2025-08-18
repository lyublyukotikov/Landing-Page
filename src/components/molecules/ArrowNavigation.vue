<script setup lang="ts">
import IArrowLeft from '@/components/atoms/IArrowLeft.vue'
import IArrowRight from '@/components/atoms/IArrowRight.vue'
</script>

<template>
  <div class="flex gap-4">
    <a href="/" class="inline-flex items-center">
      <span
        class="w-16 h-16 flex justify-center items-center rounded-full border-2 border-indigo-600 text-indigo-600 bg-transparent hover:bg-indigo-600 hover:text-white transition-colors duration-300"
      >
        <IArrowLeft />
      </span>
    </a>
    <a href="/" class="inline-flex items-center">
      <span
        class="w-16 h-16 flex justify-center items-center rounded-full border-2 border-indigo-600 text-indigo-600 bg-transparent hover:bg-indigo-600 hover:text-white transition-colors duration-300"
      >
        <IArrowRight />
      </span>
    </a>
  </div>
</template>
