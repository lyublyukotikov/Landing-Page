<script setup lang="ts">
import ISectionLabel from '@/components/atoms/core/ISectionLabel.vue'
import ITitle from '@/components/atoms/core/ITitle.vue'
import ContactInfoList from '@/components/molecules/ContactInfoList.vue'
import IImage from '@/components/atoms/core/IImage.vue'
import ContactUsForm from '@/components/molecules/ContactUsForm.vue'
</script>
<template>
  <section class="md:px-6">
    <div
      class="relative flex flex-col md:flex-row mx-auto max-w-242 py-[80px] pl-[20px] pr-[20px] md:pl-[70px] md:pr-[148px] bg-[#FFFFFF] md:rounded-[30px] border border-gray-200 shadow-lg mt-20 gap-20"
    >
      <div>
        <ISectionLabel class="mb-1">
          <template #label> Contact Us </template>
        </ISectionLabel>
        <ITitle
          class="text-black font-bold text-4xl sm:text-5xl lg:text-4xl xl:text-6xl leading-snug text-center md:text-left mb-17"
        >
          <template #title> Just Say Hello </template>
        </ITitle>
        <div class="flex flex-col gap-5">
          <ContactUsForm />
        </div>
      </div>
      <ContactInfoList />

      <IImage
        src="/Landing-Page/assets/contact-us-background-image.png"
        alt="Shadow"
        class="absolute contact-us-background-image"
      />
    </div>
  </section>
</template>
<style scoped lang="scss">
.contact-us-background-image {
  right: 0%;
  top: 0%;
  border-top-right-radius: 30px;
  z-index: 0;

  @media (max-width: 800px) {
    display: none;
  }
}
</style>
