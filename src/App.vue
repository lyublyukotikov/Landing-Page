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
import ContactUsForm from '@/components/organisms/ContactUsForm.vue'
import SubscribeSection from '@/components/organisms/SubscribeSection.vue'
import FooterApp from '@/components/organisms/FooterApp.vue'
import design from '@/assets/design.png'
import markerAnalysis from '@/assets/marker-analysis.png'
import webDevelopment from '@/assets/web-development.png'
import bgImage from '@/assets/background-image.png'
const navItems = ['About', 'Work', 'Services', 'Contact']
const lines = ['De', 'signing Future For', 'Your Business']
const cards = [
  {
    image: design,
    title: 'User Interface Design',
    description:
      'There are on many variations of  passages majority available but the  have suffered.',
    alt: 'User Interface Design',
    bgColor: '#FFF7ED',
  },
  {
    image: markerAnalysis,
    title: 'Market Analysis',
    description:
      'There are on many variations of  passages majority available but the  have suffered.',
    alt: 'Market Analysis',
    bgColor: '#F2F3FF',
  },
  {
    image: webDevelopment,
    title: 'Web Development',
    description:
      'There are on many variations of  passages majority available but the  have suffered.',
    alt: 'Web Development',
    bgColor: '#FFF0F3',
  },
    {
    image: webDevelopment,
    title: 'Web Development',
    description:
      'There are on many variations of  passages majority available but the  have suffered.',
    alt: 'Web Development',
    bgColor: '#FFF0F3',
  },
]
</script>

<template>
  <div class="app max-w-360 mx-auto md:px-6">
    <HeaderApp :navItems="navItems" />
    <HeadLine :lines="lines" />
    <HeroSection />
    <PromoSection />
    <OpportunitiesSection :cards="cards" />
    <ContactUs/>
    <MapView/>
    <ClientFeedback/>
    <CompanySponsored/>

    <!-- Блок с фоном -->
    <div
      class="relative bg-cover bg-center bg-no-repeat"
     :style="{ backgroundImage: `url(${bgImage})` }"
    >
      <div class="relative z-10">
        <ContactUsForm/>
        <SubscribeSection/>
        <FooterApp/>
      </div>
    </div>
  </div>
</template>

