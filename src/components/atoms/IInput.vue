<script setup lang="ts">
defineProps<{
  label: string
  placeholder: string
}>()
</script>

<template>
  <div class="flex flex-col gap-2 relative">
    <label :for="$attrs.id as string" class="sr-only">{{ label }}</label>
    <input
      v-bind="$attrs"
      :placeholder="placeholder"
      class="h-[60px] px-[25px] pl-[30px] pr-[50px] bg-[#F6F6F6] text-[#6B6B6B] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#5956E9]"
      :class="$attrs.class"
    />
    <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
      <slot />
    </div>
  </div>
</template>
