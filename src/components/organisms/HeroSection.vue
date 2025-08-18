<script setup lang="ts">
import IImage from '@/components/atoms/IImage.vue'
import IButton from '@/components/atoms/IButton.vue'
import IconArrowRight from '@/components/atoms/IconArrowRight.vue'
import CloudRight from '@/assets/cloud-right.png'
import CloudLeft from '@/assets/cloud-left.png'
import ComputerImage from '@/assets/computer-image.png'
import shadow from '@/assets/shadow-head-line.svg'
</script>
<template>
  <section
    class="relative bg-[#5855EE] container-wrapper pt-15 pb-100 rounded-b-[40px] flex-col items-center"
  >
    <IImage
      :src="CloudRight"
      alt="Cloud Right"
      class="absolute cloud-right h-23 w-45 md:h-40 md:w-70"
    />
    <IImage
      :src="CloudLeft"
      alt="Cloud Right"
      class="absolute cloud-left"
      width="198px"
      height="110px"
    />
    <IButton class="z-10 text-[#5855EE] bg-white flex items-center px-8 py-4">
      Get Started Now
      <IconArrowRight />
    </IButton>
    <IImage
      :src="ComputerImage"
      alt="Computer Image"
      class="computer-image h-80 w-90 sm:h-100 sm:w-120 md:h-168 md:w-193"
    />
    <IImage :src="shadow" alt="Shadow" class="absolute shadow-img w-49 h-28" />
  </section>
</template>
<style scoped lang="scss">
.cloud-right {
  right: 10%;
  bottom: 75%;
  transform: translateY(50%);
}
.cloud-left {
  left: 112px;
  top: 57%;
  transform: translateY(-50%);
}
.computer-image {
  top: 215px;
  left: 47%;
  transform: translateX(-50%);
  position: absolute;
  z-index: 0;
}

.shadow-img {
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
