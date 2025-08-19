<script setup lang="ts">
import CardsList from '@/components/molecules/CardList.vue'
import { useCards} from '@/composables/useCards'

const { cards } = useCards()
</script>

<template>
  <section class="container-wrapper mt-30 md:mt-40 justify-center items-center">
    <CardsList :cards="cards" />
  </section>
</template>
