<script setup lang="ts">
import IInput from '@/components/atoms/IInput.vue'
import ISelect from '@/components/atoms/ISelect.vue'
import ITextArea from '@/components/atoms/ITextArea.vue'
import IButton from '@/components/atoms/IButton.vue'
import IInputUserIcon from '@/components/atoms/IInputUserIcon.vue'
import IInputEmailIcon from '@/components/atoms/IInputEmailIcon.vue'
import IconPaperAirPlane from '@/components/atoms/IconPaperAirPlane.vue'

const subjects = [
  { value: 'support', text: 'Support' },
  { value: 'feedback', text: 'Feedback' },
  { value: 'business', text: 'Business Inquiry' },
]
</script>

<template>
  <form class="flex flex-col gap-5 md:max-w-[400px]">
    <IInput label="Name" placeholder="Name">
      <IInputUserIcon />
    </IInput>
    <IInput label="Email" placeholder="Email">
      <IInputEmailIcon />
    </IInput>
    <ISelect id="Subject" label="Subject" :options="subjects" />
    <ITextArea placeholder="Type your message" />
    <IButton
    class="px-8 py-5 bg-[#5956e9] text-white self-center md:self-start"
    >
      Send Message
      <template #icon>
        <IconPaperAirPlane />
      </template>
    </IButton>
  </form>
</template>
class="z-10 text-[#5855EE] bg-white flex items-center px-8 py-5"