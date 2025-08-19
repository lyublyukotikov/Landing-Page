<script setup lang="ts">
import IImage from '@/components/atoms/IImage.vue'
import IButton from '@/components/atoms/IButton.vue'
import IconArrowRight from '@/components/atoms/IconArrowRight.vue'
</script>
<template>
  <section
    class="relative bg-[#5855EE] container-wrapper pt-15 pb-100 md:rounded-b-[40px] flex-col items-center"
  >
    <IImage
      src="/assets/cloud-right-image.png"
      alt="Cloud Right"
      class="absolute cloud-right-image h-25 w-45 md:h-40 md:w-70"
    />
    <IImage
      src="/assets/cloud-left-image.png"
      alt="Cloud Right"
      class="absolute cloud-left-image"
      width="200px"
      height="110px"
    />
    <IButton class="z-10 text-[#5855EE] bg-white flex items-center px-8 py-5">
      Get Started Now
      <IconArrowRight />
    </IButton>
    <IImage
      src="/assets/computer-image.png"
      alt="Computer Image"
      class="computer-image h-90 w-100 sm:h-100 sm:w-120 md:h-170 md:w-190"
    />
    <IImage src="/assets/shadow-image.svg" alt="Shadow" class="absolute shadow-image w-49 h-28" />
  </section>
</template>
<style scoped lang="scss">
.cloud-left-image {
  left: 112px;
  top: 57%;
  transform: translateY(-50%);
}

.cloud-right-image {
  right: 10%;
  bottom: 75%;
  transform: translateY(50%);
}

.computer-image {
  position: absolute;
  top: 215px;
  left: 47%;
  transform: translateX(-50%);
  z-index: 0;
}

.shadow-image {
  position: absolute;
  top: 354px;
  right: 81px;
  object-fit: contain;
  z-index: 0;
  pointer-events: none;
}

@media (max-width: 796px) {
  .computer-image {
    top: 346px;
    left: 49%;
    transform: translateX(-50%);
  }
}

@media (max-width: 528px) {
  .computer-image {
    top: 346px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
