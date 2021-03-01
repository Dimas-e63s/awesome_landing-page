<template>
  <!-- customers -->
  <div class="wrapper-outer section-customers">
    <div class="wrapper-inner">
      <h2 class="visually-hidden">CUSTOMERS</h2>
      <a href="#" aria-label="BitBucket"
        ><img src="../assets/upload/bitbucket.svg" alt=""
      /></a>
      <a href="#" aria-label="Apple watch"
        ><img src="../assets/upload/apple-watch.svg" alt=""
      /></a>
      <a href="#" aria-label="Facebook"
        ><img src="../assets/upload/facebook.svg" alt=""
      /></a>
      <a href="#" aria-label="Atlassian"
        ><img src="../assets/upload/atlassian.svg" alt=""
      /></a>
      <a href="#" aria-label="Audi"
        ><img src="../assets/upload/audi.svg" alt=""
      /></a>
    </div>
  </div>
  <!-- / customers -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section-customers {
  .wrapper-inner {
    padding-top: $padding-vertical-sm;
    padding-bottom: $padding-vertical-sm;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      opacity: 0.3;
      transition: $transition;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
