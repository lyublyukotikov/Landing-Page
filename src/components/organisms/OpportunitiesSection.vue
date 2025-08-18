<script setup lang="ts">
import CardsList from '@/components/molecules/CardList.vue'

defineProps<{
  cards: {
    image: string
    title: string
    description: string
    alt: string
    bgColor: string
  }[]
}>()
</script>

<template>
  <section class="container-wrapper mt-20 justify-center items-center">
    <CardsList :cards="cards" />
  </section>
</template>
