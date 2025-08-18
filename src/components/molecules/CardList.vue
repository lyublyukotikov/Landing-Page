<script setup lang="ts">
import CardItem from '@/components/molecules/CardItem.vue'

interface Card {
  image: string
  title: string
  description: string
  alt: string
  bgColor: string
}

const props = defineProps<{
  cards: Card[]
}>()
</script>

<template>
  <div class="cards-carousel flex flex-nowrap justify-center overflow-x-auto gap-8 pb-10">
    <CardItem
      v-for="(card, index) in props.cards"
      :key="index"
      :title="card.title"
      :image="card.image"
      :bgColor="card.bgColor"
      :alt="card.alt"
      :description="card.description"
      class="flex-shrink-0"
    />
  </div>
</template>

<style scoped lang="scss">
.cards-carousel {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #5855ee;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f2f3ff;
    border-radius: 6px;
  }
}

.cards-carousel > * {
  scroll-snap-align: start;
}
</style>
