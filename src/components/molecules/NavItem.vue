<script setup lang="ts">
defineProps<{
  text: string
  href?: string
}>()
</script>

<template>
  <li class="header__nav-item h-full flex items-center">
    <a
      :href="href || '#'"
      class="text-white font-bold text-sm sm:text-base md:text-lg leading-none hover:underline transition-all duration-200"
    >
      {{ text }}
    </a>
  </li>
</template>
