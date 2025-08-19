<script setup lang="ts">
import IImage from '@/components/atoms/IImage.vue'
import IParagraph from '@/components/atoms/IParagraph.vue'
import ITitle from '@/components/atoms/ITitle.vue'
import type { Card } from '@/composables/useCards'

defineProps<{ card: Card }>()
</script>

<template>
  <div
    class="flex flex-col justify-center items-center py-10 sm:py-12 md:py-15 
           w-72 sm:w-80 md:w-92 rounded-xl gap-6 sm:gap-8 md:gap-11"
    :style="{ backgroundColor: card.bgColor }"
  >
    <IImage
      :src="card.image"
      :alt="card.alt"
      class="w-32 h-32 sm:w-40 sm:h-40 md:w-47 md:h-47"
    />
    <div class="flex flex-col gap-4 sm:gap-6 md:gap-9 items-center text-center">
      <ITitle class="font-manrope text-lg sm:text-xl md:text-2xl leading-none font-bold">
        <template #title>{{ card.title }}</template>
      </ITitle>
      <IParagraph class="max-w-[220px] sm:max-w-[280px] md:max-w-[280px]">
        <template #paragraph>{{ card.description }}</template>
      </IParagraph>
    </div>
  </div>
</template>
