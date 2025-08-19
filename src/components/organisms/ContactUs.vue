<script setup lang="ts">
import IImage from '@/components/atoms/core/IImage.vue'
import ITitle from '@/components/atoms/core/ITitle.vue'
import IButton from '@/components/atoms/core/IButton.vue'
import ArrowRightIcon from '@/components/atoms/icons/ArrowLeftIcon.vue'
</script>
<template>
  <section
    class="relative container-wrapper flex-col md:flex-row mt-20 lg:mt-45 pb-10 md:pb-0 items-center md:rounded-[40px] bg-[#5855EE] px-10 pt-15 gap-20"
  >
    <IImage
      src="/Landing-Page/assets/contact-us-image.png"
      class="w-110 h-90 md:w-120 md:h-90 lg:w-140 lg:h-110 xl:w-160 xl:h-136"
      alt="Contact Us"
    />
    <div class="flex flex-col gap-9 w-full md:max-w-119 items-center md:items-start">
      <ITitle
        class="text-white font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug text-center md:text-left"
      >
        <template #title>
          Making <br class="hidden sm:block" />
          Beautiful Things
        </template>
      </ITitle>
      <IButton
        class="px-9 py-5 rounded-xl text-lg text-[#5855EE] bg-white flex items-center justify-center md:justify-start"
      >
        Contact Us
        <ArrowRightIcon />
      </IButton>
    </div>
  </section>
</template>
