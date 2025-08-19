<script setup lang="ts">
import SelectIcon from '@/components/atoms/icons/SelectIcon.vue'

interface SelectOption {
  value: string
  text: string
}

defineProps<{
  options: SelectOption[]
}>()
</script>

<template>
  <div class="flex flex-col gap-2 relative">
    <select
      v-bind="$attrs"
      class="h-[60px] px-[25px] pl-[30px] pr-[50px] bg-[#F6F6F6] text-[#6B6B6B] rounded-[10px] appearance-none focus:outline-none focus:ring-2 focus:ring-[#5956E9] cursor-pointer"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <SelectIcon class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none" />
  </div>
</template>
