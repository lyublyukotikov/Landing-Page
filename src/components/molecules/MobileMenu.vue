<script setup lang="ts">
import NavList from '@/components/molecules/NavList.vue'
import ICloseButton from '@/components/atoms/core/ICloseButton.vue'
import type { NavItem } from '@/interfaces/nav-item.interface'

defineProps<{
  isOpen: boolean
  navItems: NavItem[]
  toggleMenu: () => void
}>()
</script>

<template>
  <transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-50 bg-[#5855EE] flex flex-col md:hidden">
      <ICloseButton :toggleMenu="toggleMenu" />
      <div class="flex flex-col items-center justify-center flex-1 gap-8 min-h-[80vh]">
        <NavList :navItems="navItems" vertical />
      </div>
    </div>
  </transition>
</template>
