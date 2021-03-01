<template>
  <TheHeader />
  <main>
    <HeroImage />
    <Customers />
    <Plan />
    <Features />
    <Stats />
    <Blog />
    <Quotes />
    <Faq />
    <GetStarted />
    <NewsLetter />
  </main>
  <TheFooter />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import HeroImage from '@/components/HeroImage.vue';
import Customers from '@/components/Customers.vue';
import Plan from '@/components/Plan.vue';
import Features from '@/components/Features.vue';
import Stats from '@/components/Stats.vue';
import Blog from '@/components/Blog.vue';
import Quotes from '@/components/Quotes.vue';
import Faq from '@/components/Faq.vue';
import GetStarted from '@/components/GetStarted.vue';
import NewsLetter from '@/components/NewsLetter.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    HeroImage,
    Customers,
    Plan,
    Features,
    Stats,
    Blog,
    Quotes,
    Faq,
    GetStarted,
    NewsLetter,
    TheFooter,
  },
};
</script>

<style lang="scss" scoped></style>
