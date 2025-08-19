<script setup lang="ts">
import NavList from '@/components/molecules/NavList.vue'
import HeaderActions from '@/components/molecules/HeaderActions.vue'
import LogoAppIcon from '@/components/atoms/icons/LogoAppIcon.vue'
import MobileMenu from '@/components/molecules/MobileMenu.vue'
import { ref } from 'vue'
import { useNavigation } from '@/composables/useNavigation'

const { navItems } = useNavigation()

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header
    class="container-wrapper flex h-[90px] items-center bg-[#5855EE] md:mt-10 md:rounded-t-[40px]"
  >
    <div class="mx-auto flex w-full max-w-292 items-center justify-between h-15 mt-7">
      <LogoAppIcon class="w-20 sm:w-24 md:w-31" />
      <NavList :navItems="navItems" class="hidden md:flex" />

      <div class="flex items-center gap-4">
        <HeaderActions @toggle-menu="toggleMenu" />
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
