<script setup lang="ts">
import NavItemComponent from '@/components/molecules/NavItem.vue'
import type { NavItem } from '@/composables/useNavigation'

defineProps<{
  navItems: NavItem[]
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
      <NavItemComponent
        v-for="item in navItems"
        :key="item.href"
        :text="item.text"
        :href="item.href"
      />
    </ul>
  </div>
</template>
