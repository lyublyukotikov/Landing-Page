<script setup lang="ts">
import NavItem from '@/components/molecules/NavItem.vue'

defineProps<{
  items: string[]
  vertical?: boolean
}>()
</script>

<template>
  <div class="items-center">
    <ul
      :class="[
        'h-full items-center md:gap-3 lg:gap-8',
        vertical ? 'flex flex-col gap-8 justify-center' : 'flex flex-row',
      ]"
    >
      <NavItem v-for="item in items" :key="item" :text="item" />
    </ul>
  </div>
</template>
