<template>
  <!-- features -->
  <div class="wrapper-outer section-features">
    <div class="wrapper-inner">
      <h2 class="text-center">ABOUT US</h2>
      <div class="subtitle text-center">Read about our app</div>
      <ul class="features-list">
        <li
          class="features-list__item"
          v-for="item in featureSchema"
          :key="item.icon"
        >
          <div class="features-list__item-icon">
            <img :src="item.icon" alt="" />
          </div>
          <h3 class="features-list__item-title">{{ item.title }}</h3>
          <div class="features-list__item-text">
            {{ item.text }}
          </div>
        </li>
      </ul>
      <div class="btns">
        <a href="#" class="btn btn--danger">Read more</a>
        <span class="seperator">OR</span>
        <a href="#" class="btn btn--primary">Get Started</a>
      </div>
    </div>
  </div>
  <!-- / features -->
</template>

<script>
import { featureSchema } from '@/utils/schemes.js';
export default {
  setup() {
    return {
      featureSchema,
    };
  },
};
</script>

<style lang="scss" scoped></style>
