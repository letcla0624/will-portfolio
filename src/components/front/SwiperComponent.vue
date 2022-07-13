<template>
  <swiper
    :slidesPerView="'auto'"
    :breakpoints="{
      '@0.00': { slidesPerView: 1, spaceBetween: 16, slidesPerGroup: 1 },
      '@0.50': { slidesPerView: 2, spaceBetween: 16, slidesPerGroup: 2 },
      '@0.75': { slidesPerView: 3, spaceBetween: 16, slidesPerGroup: 3 },
      '@1.00': { slidesPerView: 4, spaceBetween: 16, slidesPerGroup: 4 },
    }"
    :pagination="{
      type: 'fraction',
    }"
    :navigation="true"
    :modules="modules"
    class="swiper"
    :id="galleryID"
  >
    <swiper-slide v-for="item in imagesData" :key="item.id">
      <a
        :href="item.largeURL"
        :data-pswp-width="item.width"
        :data-pswp-height="item.height"
        target="_blank"
        class="d-block mb-5 pb-5"
      >
        <img
          :src="item.thumbnailURL"
          :alt="item.alt"
          class="w-100 rounded-lg"
        />
      </a>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export default {
  data() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  props: ["galleryID", "imagesData"],
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        gallery: "#" + this.$props.galleryID,
        children: "a",
        pswpModule: () => import("photoswipe"),
      });
      this.lightbox.init();
    }
  },
  unmounted() {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },
};
</script>

<style lang="scss">
.swiper-wrapper {
  align-items: center;
}
.swiper-pagination {
  z-index: 0 !important;
}
.swiper-button-next,
.swiper-button-prev {
  top: 92% !important;
  border: 1px solid var(--bs-dark);
  width: fit-content !important;
  transition: 0.3s;
  &::after {
    font-family: "bootstrap-icons" !important;
    color: var(--bs-dark);
  }
  &:hover {
    background-color: var(--bs-dark);
    &::after {
      color: var(--bs-light);
    }
  }
}
.swiper-button-next {
  right: 1.75rem;
  border-radius: 0 0.25rem 0.25rem 0;
  &::after {
    content: "\F135" !important;
  }
}
.swiper-button-prev {
  left: auto !important;
  right: 4.6rem !important;
  border-radius: 0.25rem 0 0 0.25rem;
  &::after {
    content: "\F12C" !important;
  }
}
@media (max-width: 414.98px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none !important;
  }
}
</style>
