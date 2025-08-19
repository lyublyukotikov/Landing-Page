<script setup lang="ts">
import { useContactItems } from '@/composables/useContactItems'
import IParagraph from '@/components/atoms/core/IParagraph.vue'

const { contactItems } = useContactItems()
</script>

<template>
  <ul class="relative z-10 flex flex-col gap-4 mx-auto md:mt-120">
    <li v-for="(item, index) in contactItems" :key="index" class="flex items-center gap-5">
      <a :href="item.href" target="_blank" class="hover:underline flex items-center gap-5">
        <component :is="item.icon" class="w-5 h-5" />
        <IParagraph
          class="whitespace-pre-line font-poppins font-normal text-[16px] leading-[100%] tracking-normal"
        >
          <template #paragraph>{{ item.text }}</template>
        </IParagraph>
      </a>
    </li>
  </ul>
</template>
