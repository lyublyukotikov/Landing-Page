<script setup lang="ts">
import ClientTestimonials from '@/components/molecules/ClientTestimonials.vue'
import TestimonialCard from '@/components/molecules/TestimonialCard.vue'
</script>
<template>
  <div
    class="container-wrapper flex flex-col lg:flex-row items-center justify-center gap-7 mt-20 md:mt-54"
  >
    <ClientTestimonials />
    <TestimonialCard />
  </div>
</template>
