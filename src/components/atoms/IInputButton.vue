<script setup lang="ts">
defineProps<{
  placeholder: string
  buttonText: string
}>()
</script>

<template>
  <div class="flex justify-center w-full">
    <div class="relative w-full max-w-[570px]">
      <input
        v-bind="$attrs"
        :placeholder="placeholder"
        class="w-full h-20 pl-10 pr-32 bg-[#6E6BFF] text-white placeholder-white rounded-lg focus:outline-none transition"
        :class="$attrs.class"
      />
      <button
        type="button"
        class="absolute right-2 top-1/2 -translate-y-1/2 px-10 py-5 bg-white text-[#6E6BFF] rounded-lg  hover:bg-gray-100 transition font-bold"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>
