<script setup lang="ts">
import IImage from '@/components/atoms/IImage.vue'
import NavList from '@/components/molecules/NavList.vue'
import HeaderActions from '@/components/molecules/HeaderActions.vue'
import logo from '@/assets/logo-image.svg'
import IButtonBurger from '@/components/atoms/IButtonBurger.vue'
import MobileMenu from '@/components/molecules/MobileMenu.vue'
import { ref } from 'vue'

defineProps<{
  navItems: string[]
}>()

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="container-wrapper h-[90px] items-center bg-[#5855EE] md:mt-10 md:rounded-t-[40px]">
    <div class="mx-auto mt-7 flex h-15 w-full max-w-292 items-center justify-between">
      <IImage :src="logo" class="w-20 sm:w-24 md:w-31" />
      <NavList :items="navItems" class="hidden md:flex" />
      <div class="flex items-center">
        <IButtonBurger class="md:hidden" @click="toggleMenu" />
        <HeaderActions />
      </div>
    </div>
    <MobileMenu :isOpen="isMenuOpen" :navItems="navItems" :toggleMenu="toggleMenu" />
  </header>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
