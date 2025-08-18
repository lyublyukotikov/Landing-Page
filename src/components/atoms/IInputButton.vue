<script setup lang="ts">
defineProps<{
  label: string
  placeholder: string
  buttonText: string
}>()
</script>

<template>
  <div class="flex flex-col gap-2 relative">
    <label :for="$attrs.id as string" class="sr-only">{{ label }}</label>
    <div class="relative w-full">
      <input
        v-bind="$attrs"
        :placeholder="placeholder"
        class="h-[80px] w-full pl-[39px] pr-[335px] bg-[#6E6BFF] text-[#FFFFFF] placeholder-white rounded-[10px] focus:outline-none"
        :class="$attrs.class"
      />
      <button
        type="button"
        class="absolute right-3 top-1/2 -translate-y-1/2 px-10 py-4 bg-white text-[#6E6BFF] rounded-[8px] font-medium hover:bg-gray-100 transition cursor-pointer"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>
