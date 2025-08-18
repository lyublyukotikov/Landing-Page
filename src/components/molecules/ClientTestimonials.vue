<script setup lang="ts">
import ISectionLabel from '@/components/atoms/ISectionLabel.vue'
import ITitle from '@/components/atoms/ITitle.vue'
import ArrowNavigation from '@/components/molecules/ArrowNavigation.vue'
</script>
<template>
  <div class="flex flex-col max-w-142">
    <ISectionLabel class="mb-1">
      <template #label> Testimonial </template>
    </ISectionLabel>
    <ITitle
     class="text-black font-bold text-4xl sm:text-5xl lg:text-4xl xl:text-6xl leading-snug text-center md:text-left mb-15"

    >
      <template #title>
        What Say Our <br />
        Client About Us
      </template>
    </ITitle>
    <ArrowNavigation />
  </div>
</template>
