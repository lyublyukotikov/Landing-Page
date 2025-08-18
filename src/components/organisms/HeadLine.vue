<script setup lang="ts">
import ShadowedText from '@/components/atoms/ShadowedText.vue'

defineProps<{
  lines: string[]
}>()
</script>

<template>
  <section
    class="container-wrapper justify-center pt-22 text-center bg-[#5855EE]"
  >
    <ShadowedText :lines="lines" />
  </section>
</template>
