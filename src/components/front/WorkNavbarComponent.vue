<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white py-3 sticky-top"
    :class="{ shadow: isScroll }"
  >
    <div class="container">
      <div class="d-flex justify-content-between align-items-center w-100">
        <div class="navbar-nav me-auto">
          <RouterLink to="/" class="nav-link">
            <i class="bi bi-arrow-left me-1"></i>返回首頁
          </RouterLink>
        </div>

        <!-- <button class="btn btn-outline-dark" type="button">
          <i class="bi bi-file-earmark-arrow-down-fill me-1"></i>下載履歷
        </button> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isScroll: false,
    };
  },
  mounted() {
    // 視窗捲動時
    document.addEventListener("scroll", () => {
      if (document.scrollingElement.scrollTop >= 100) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
