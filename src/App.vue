<script setup lang="ts">
import HeaderApp from '@/components/organisms/HeaderApp.vue'
import HeadLine from '@/components/organisms/HeadLine.vue'
import HeroSection from '@/components/organisms/HeroSection.vue'
import PromoSection from '@/components/organisms/PromoSection.vue'
import OpportunitiesSection from '@/components/organisms/OpportunitiesSection.vue'
import ContactUs from '@/components/organisms/ContactUs.vue'
import MapView from '@/components/organisms/MapView.vue'
import ClientFeedback from '@/components/organisms/ClientFeedback.vue'
import CompanySponsored from '@/components/organisms/CompanySponsored.vue'
import ContactUsSection from '@/components/organisms/ContactUsSection.vue'
import SubscribeSection from '@/components/organisms/SubscribeSection.vue'
import FooterApp from '@/components/organisms/FooterApp.vue'
</script>

<template>
  <div class="app max-w-360 mx-auto">
    <HeaderApp />
    <HeadLine />
    <HeroSection />
    <PromoSection />
    <OpportunitiesSection />
    <ContactUs />
    <MapView />
    <ClientFeedback />
    <CompanySponsored />
    <div
      class="relative bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: 'url(/Landing-Page/assets/background-image.png)' }"
    >
      <div class="relative z-10">
        <ContactUsSection />
        <SubscribeSection />
        <FooterApp />
      </div>
    </div>
  </div>
</template>
