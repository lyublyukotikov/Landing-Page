<template>
  <button
    v-bind="$attrs"
    class="cursor-pointer rounded-lg font-bold leading-none flex items-center gap-3 transition hover:opacity-90 text-sm sm:text-base"
    type="button"
  >
    <slot />
    <slot name="icon" />
  </button>
</template>
