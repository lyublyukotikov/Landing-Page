<script setup lang="ts">
import IImage from '@/components/atoms/IImage.vue'
import ITitle from '@/components/atoms/ITitle.vue'
import ISectionLabel from '@/components/atoms/ISectionLabel.vue'
import IParagraph from '@/components/atoms/IParagraph.vue'
</script>

<template>
  <div
    class="relative flex flex-col gap-11 px-10 py-14 md:px-20 md:py-28 rounded-[40px] border border-[#ECEBFA] bg-[linear-gradient(270deg,#FFFFFF_0%,#ECEBFA_98.36%)] 
    before:content-[''] before:absolute before:inset-0 before:translate-y-4 before:rounded-[40px] before:bg-[#DCDBFF] before:-z-10 
    after:content-[''] after:absolute after:inset-0 after:translate-y-7 after:rounded-[60px] after:bg-[#F2F1FF] after:-z-20"
  >
    <IImage
      src="/assets/ellipse-purple-image.png"
      alt="Ellipse Purple"
      class="absolute bottom-full right-7 w-16 h-16 translate-y-1/2"
    />

    <div class="flex items-center gap-6">
      <IImage src="/assets/user-image.svg" class="w-16 h-16 md:w-22 md:h-22" />
      <div class="flex flex-col">
        <ITitle class="text-base font-bold md:text-2xl">
          <template #title>Md Shamim Hossain</template>
        </ITitle>
        <ISectionLabel class="text-sm md:text-base">
          <template #label>UI/UX Designer</template>
        </ISectionLabel>
      </div>
    </div>

    <IParagraph
      class="max-w-130 font-poppins font-medium text-base md:text-2xl leading-6 md:leading-9 tracking-normal"
    >
      <template #paragraph>
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
        model text, and a search for 'lorem ipsum' will uncover many web sites still in their
        infancy.
      </template>
    </IParagraph>

    <IImage
      src="/assets/ellipse-yellow-image.png"
      alt="Ellipse Yellow"
      class="absolute top-full left-32 w-24 h-24 -translate-y-1/2"
    />
  </div>
</template>
