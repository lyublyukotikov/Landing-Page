<script setup lang="ts">
import IInput from '@/components/atoms/core/IInput.vue'
import ISelect from '@/components/atoms/core/ISelect.vue'
import ITextArea from '@/components/atoms/core/ITextArea.vue'
import IButton from '@/components/atoms/core/IButton.vue'
import InputUserIcon from '@/components/atoms/icons/InputUserIcon.vue'
import InputEmailIcon from '@/components/atoms/icons/InputEmailIcon.vue'
import PaperAirPlaneIcon from '@/components/atoms/icons/PaperAirPlaneIcon.vue'
import { useSubjects } from '@/composables/useSubjects'

const { subjects } = useSubjects()
</script>

<template>
  <form class="flex flex-col gap-5 md:max-w-[400px]">
    <IInput label="Name" placeholder="Name">
      <InputUserIcon />
    </IInput>
    <IInput label="Email" placeholder="Email">
      <InputEmailIcon />
    </IInput>
    <ISelect id="Subject" :options="subjects" />
    <ITextArea placeholder="Type your message" />
    <IButton class="px-8 py-5 bg-[#5956e9] text-white self-center md:self-start">
      Send Message
      <template #icon>
        <PaperAirPlaneIcon />
      </template>
    </IButton>
  </form>
</template>
class="z-10 text-[#5855EE] bg-white flex items-center px-8 py-5"
