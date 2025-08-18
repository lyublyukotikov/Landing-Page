<script setup lang="ts">
import IImage from '@/components/atoms/IImage.vue'
import shadowHeadLine from '@/assets/shadow-head-line.svg'

defineProps<{
  lines: string[]
}>()
</script>

<template>
  <div>
    <h1
      class="text-white font-bold leading-tight inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
    >
      <span class="relative inline-block">
        <span>{{ lines[0] }}</span>
        <IImage :src="shadowHeadLine" alt="Shadow" class="shadow-img" />
      </span>
      <span>
        {{ lines[1] }}
      </span>
     <br class="hidden sm:block" />
      {{ lines[2] }}
    </h1>
  </div>
</template>

<style scoped lang="scss">
.shadow-img {
  position: absolute;
  top: 0;
  right: 10px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 0;
  pointer-events: none;
}
</style>
