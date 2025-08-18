<script setup lang="ts">
import IconSearch from '@/components/atoms/IconSearch.vue'
import IButton from '@/components/atoms/IButton.vue'
</script>
<template>
  <div class="flex items-center h-full gap-11">
    <IButton>
  <template #icon>
    <IconSearch />
  </template>
    </IButton>
    <IButton style="background-color: #FFC9D0; color: #5956E9; padding: 20px 32px; ">
    Join Us
    </IButton>
  </div>
</template>
