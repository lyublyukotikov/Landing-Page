<script setup lang="ts">
import ISectionLabel from '@/components/atoms/ISectionLabel.vue'
import ITitle from '@/components/atoms/ITitle.vue'
import IButton from '@/components/atoms/IButton.vue'
import IInput from '@/components/atoms/IInput.vue'
import IconPaperAirPlane from '@/components/atoms/IconPaperAirPlane.vue'
import IInputUserIcon from '@/components/atoms/IInputUserIcon.vue'
import IInputEmailIcon from '@/components/atoms/IInputEmailIcon.vue'
import ITextArea from '@/components/atoms/ITextArea.vue'
import ISelect from '@/components/atoms/ISelect.vue'
import IPhoneContact from '@/components/atoms/IPhoneContact.vue'
import IEmailContact from '@/components/atoms/IEmailContact.vue'
import IMapMark from '@/components/atoms/IMapMark.vue'
import IParagraph from '@/components/atoms/IParagraph.vue'
import IImage from '@/components/atoms/IImage.vue'
import ContactUsBackgroundImage from '@/assets/contact-us-background-image.png'
const items = [
  { img: IPhoneContact, text: '+3935 34567 325' },
  { img: IMapMark, text: "4074 Ebert Summit Suite 375\nLake Leonardchester"  },
  { img: IEmailContact, text: 'yourmail@gmailcom' },
]
</script>
<template>
  <section
    class=" relative flex mx-auto max-w-242 py-[80px] pl-[70px] pr-[148px] bg-[#FFFFFF] rounded-[30px] border border-gray-200 shadow-lg mt-20 gap-20"
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
      <div class="flex flex-col gap-5 max-w-100">
        <IInput label="Name" placeholder="Name">
          <IInputUserIcon />
        </IInput>
        <IInput label="Name" placeholder="Name">
          <IInputEmailIcon />
        </IInput>
        <ISelect
          id="Subject"
          label="Subject"
          :options="[
            { value: 'support', text: 'Support' },
            { value: 'feedback', text: 'Feedback' },
            { value: 'business', text: 'Business Inquiry' },
          ]"
        />
        <ITextArea placeholder="Type your message" />
        <IButton
          style="
            padding: 19px 30px;
            background-color: #5956e9;
            color: #ffffff;
            align-self: flex-start;
          "
        >
          Send Message
          <template #icon>
            <IconPaperAirPlane />
          </template>
        </IButton>
      </div>
    </div>
    <ul class="flex flex-col gap-4 mt-125">
      <li v-for="(item, index) in items" :key="index" class="flex items-center gap-[20px]">
        <component :is="item.img" class="w-5 h-5" />
        <IParagraph
          class=" whitespace-pre-line font-poppins font-normal text-[16px] leading-[100%] tracking-normal"
        >
          <template #paragraph>
            {{item.text}}
          </template>
        </IParagraph>
      </li>
    </ul>

    <IImage :src="ContactUsBackgroundImage" alt="Shadow" class="absolute contact-us-background-img" />
  </section>
</template>
<style scoped lang="scss">
.contact-us-background-img {
  right: 0%;
  top: 0%;
  border-top-right-radius: 30px;
}
</style>
