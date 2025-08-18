<script setup lang="ts">
import ITitle from '@/components/atoms/ITitle.vue'
import ISectionLabel from '@/components/atoms/ISectionLabel.vue'
import IParagraph from '@/components/atoms/IParagraph.vue'
</script>
<template>
  <div class="flex flex-col max-w-142">
    <ISectionLabel class="mb-2 sm:mb-3">
      <template #label> About us </template>
    </ISectionLabel>
    <ITitle
      class="mb-4 md:mb-6 sm:mb-8 lg:mb-11 text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold"
    >
      <template #title>
        Grow Your <br class="hidden sm:block" />
        Business With Us
      </template>
    </ITitle>
    <IParagraph
      class="text-sm sm:text-base md:text-lg leading-[22px] sm:leading-[26px] md:leading-[28px]"
    >
      <template #paragraph>
        It is a long established fact that a reader will be distracted by the read content of a page
        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
        normal distribution of letters as opposed to random text.
      </template>
    </IParagraph>
  </div>
</template>
