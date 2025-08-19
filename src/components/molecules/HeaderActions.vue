<script setup lang="ts">
import SearchIcon from '@/components/atoms/icons/SearchIcon.vue'
import IButton from '@/components/atoms/core/IButton.vue'
import IButtonBurger from '@/components/atoms/core/IButtonBurger.vue'

const emit = defineEmits(['toggle-menu'])
</script>
<template>
  <div class="flex items-center h-full gap-4 lg:gap-11">
    <IButton>
      <template #icon>
        <SearchIcon />
      </template>
    </IButton>
    <IButtonBurger class="md:hidden" @click="emit('toggle-menu')" />
    <IButton class="bg-[#FFC9D0] text-[#5956E9] px-8 py-5"> Join Us </IButton>
  </div>
</template>
