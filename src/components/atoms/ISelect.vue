<script setup lang="ts">
import ISelectIcon from '@/components/atoms/ISelectIcon.vue'

defineProps<{
  label: string
  options: { value: string; text: string }[]
}>()
</script>

<template>
  <div class="flex flex-col gap-2 relative">
    <label :for="$attrs.id as string" class="sr-only">{{ label }}</label>
    <select
      v-bind="$attrs"
      class="h-[60px] px-[25px] pl-[30px] pr-[50px] bg-[#F6F6F6] text-[#6B6B6B] rounded-[10px] appearance-none focus:outline-none focus:ring-2 focus:ring-[#5956E9] cursor-pointer"
    >
      <option value="" disabled selected>Select {{ label }}</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <ISelectIcon class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none" />
  </div>
</template>
