<script setup lang="ts">
import ITitle from '@/components/atoms/ITitle.vue'
import IInputButton from '@/components/atoms/IInputButton.vue'
</script>
<template>
  <section
    class="relative container-wrapper justify-center flex-col mt-25 items-center md:rounded-[40px] not-last:px-10 gap-17"
  >
    <ITitle
      class="text-white font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug text-center"
    >
      <template #title>
        Subscribe To <br class="hidden sm:block" />
        Our Monthly Newsletter
      </template>
    </ITitle>
    <IInputButton
      label="Email"
      placeholder="Email address here "
      buttonText="Subscribe"
    />
  </section>
</template>
