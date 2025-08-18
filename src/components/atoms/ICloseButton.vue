<script setup lang="ts">

defineProps<{
  toggleMenu: () => void
}>()
</script>

<template>
  <div class="flex justify-end p-4">
    <button @click="toggleMenu" class="p-2 cursor-pointer">
      <span class="sr-only">Close navigation menu</span>
      ✕
    </button>
  </div>
</template>
