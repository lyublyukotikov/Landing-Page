<script setup lang="ts">
import ArrowLeftIcon from '@/components/atoms/icons/ArrowLeftIcon.vue'
import ArrowRightIcon from '@/components/atoms/icons/ArrowRightIcon.vue'
</script>

<template>
  <div class="flex gap-4">
    <a href="/" class="inline-flex items-center">
      <span
        class="w-16 h-16 flex justify-center items-center rounded-full border-2 border-[#5956E9] text-[#5956E9] bg-transparent hover:bg-[#5956E9] hover:text-white transition-colors duration-300"
      >
        <ArrowLeftIcon />
      </span>
    </a>

    <a href="/" class="inline-flex items-center">
      <span
        class="w-16 h-16 flex justify-center items-center rounded-full border-2 border-[#5956E9] text-[#5956E9] bg-transparent hover:bg-[#5956E9] hover:text-white transition-colors duration-300"
      >
        <ArrowRightIcon />
      </span>
    </a>
  </div>
</template>
