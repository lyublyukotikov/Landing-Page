<script setup lang="ts">
import LogoAppIcon from '@/components/atoms/icons/LogoAppIcon.vue'
import IParagraph from '@/components/atoms/IParagraph.vue'
import SocialLinks from '@/components/molecules/SocialLinks.vue'
</script>

<template>
  <footer
    class="mx-auto max-w-[1146px] flex flex-col md:flex-row items-center justify-between px-6 pt-3 md:pt-0 mt-25 h-[104px] border-t border-white/20"
  >
    <LogoAppIcon class="w-20 sm:w-24 md:w-31" />

    <IParagraph class="text-white text-xs sm:text-sm md:text-base lg:text-lg font-normal">
      <template #paragraph>
        Copyright ©2020 BasicTheme. All Rights Reserved
      </template>
    </IParagraph>

    <SocialLinks />
  </footer>
</template>
