<script setup lang="ts">
import IImage from '@/components/atoms/core/IImage.vue'

defineProps<{
  lines: string[]
}>()
</script>

<template>
  <div>
    <h1
      class="inline-block leading-tight font-bold text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
    >
      <span class="relative inline-block">
        <span>{{ lines[0] }}</span>
        <IImage
          src="/Landing-Page/assets/shadow-head-line-image.svg"
          alt="Shadow"
          class="shadow-img"
        />
      </span>
      <span>{{ lines[1] }}</span>
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
}
</style>
