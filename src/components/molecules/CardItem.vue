<script setup lang="ts">
import IImage from '@/components/atoms/IImage.vue'
import IParagraph from '@/components/atoms/IParagraph.vue'
import ITitle from '@/components/atoms/ITitle.vue'
defineProps<{
  title: string
  image: string
  description: string
  alt: string
  bgColor: string
}>()
</script>
<template>
  <div
    class="flex flex-col justify-center items-center py-15 w-92 rounded-xl gap-11"
    :style="{ backgroundColor: bgColor }"
  >
    <IImage :src="image" :alt="alt" class="w-47 h-47" />
    <div class="flex flex-col gap-9 items-center text-center">
     <ITitle class="font-manrope text-2xl leading-none text-center font-bold">
        <template #title> {{ title }} </template>
      </ITitle>
      <IParagraph class="max-w-70">
        <template #paragraph>
          {{ description }}
        </template>
      </IParagraph>
    </div>
  </div>
</template>
