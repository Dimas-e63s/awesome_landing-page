<template>
  <!-- blog -->
  <div class="wrapper-outer section-blog">
    <div class="wrapper-inner vertical-indent vertical-indent--l">
      <h2 class="text-center">OUR RESOURCES</h2>
      <div class="subtitle text-center">Start reading our blog</div>
      <div class="slider-wrapper">
        <ul class="slider-blog">
          <li class="slider-blog__item">
            <div class="slider-blog__item-gallery">
              <a
                class="image-link image-link--big"
                href="#"
                aria-label="Image 1"
              >
                <img src="../assets/blog-main.png" alt="" />
                <span class="loupe"></span>
              </a>
              <a
                class="image-link image-link--s-1"
                aria-label="Image 2"
                href="#"
              >
                <img src="../assets/blog-sub-1.png" alt="" />
                <span class="loupe"></span>
              </a>
              <a
                class="image-link image-link--s-2"
                aria-label="Image 3"
                href="#"
              >
                <img src="../assets/blog-sub-2.png" alt="" />
                <span class="loupe"></span>
              </a>
            </div>
            <div class="slider-blog__item-content">
              <h3 class="title">How to start planning</h3>
              <div class="text">
                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu
                usu vidit tractatos, vero tractatos ius an, in mel diceret
                persecuti. Natum petentium principes mei ea. Tota everti
                periculis vis ei, quas tibique pro at, eos ut decore ...
              </div>
              <div class="btns">
                <div class="btn-group">
                  <a href="#" class="btn btn--primary">Read now</a>
                  <a href="#" class="btn btn--transparent"
                    >Add to your bookmarks</a
                  >
                </div>
              </div>
            </div>
          </li>
        </ul>
        <a href="#" class="btn-blog btn-blog--prev" aria-label="Prev Slide"></a>
        <a href="#" class="btn-blog btn-blog--next" aria-label="Next Slide"></a>
      </div>

      <ul class="dots">
        <li class="dots__item dots__item--active"></li>
        <li class="dots__item"></li>
        <li class="dots__item"></li>
      </ul>
    </div>
  </div>
  <!-- / blog -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
