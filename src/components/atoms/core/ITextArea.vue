<script setup lang="ts">
import TextareaIcon from '@/components/atoms/icons/TextAreaIcon.vue'
defineProps<{
  placeholder: string
}>()
</script>

<template>
  <div class="flex flex-col gap-2 relative">
    <textarea
      :placeholder="placeholder"
      class="h-[187px] resize-none px-4 py-2 rounded-[8px] bg-[#F6F6F6] text-[#6B6B6B] focus:outline-none focus:ring-2 focus:ring-[#5956E9]"
    ></textarea>
    <TextareaIcon class="absolute right-6 top-3 pointer-events-none"/>
  </div>
</template>
