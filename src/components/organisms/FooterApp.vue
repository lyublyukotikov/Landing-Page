<script setup lang="ts">
import IImage from '@/components/atoms/IImage.vue'
import faceBookImage from '@/assets/facebook-image.png'
import twitterImage from '@/assets/twitter-image.png'
import behanceImage from '@/assets/behance-image.png'
import pinterestImage from '@/assets/pinterest-image.png'
import logo from '@/assets/logo-image.svg'

const logos = [faceBookImage, twitterImage, behanceImage, pinterestImage]
</script>

<template>
  <header class="container-wrapper h-[104px] items-center justify-between md:mt-10">
      <IImage :src="logo" class="w-20 sm:w-24 md:w-31" />
      <p>
        Copyright ©2020 BasicTheme. All Rights Reserved
      </p>
    <div class="flex gap-4">
        <IImage
          v-for="(logo, index) in logos"
          :key="index"
          :src="logo"
          class="w-10 h-10"
        />
    </div>
  </header>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
