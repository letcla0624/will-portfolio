<template>
  <div class="bg-dark text-center position-relative footer">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2560 175"
      xml:space="preserve"
      fill="#232529"
      class="wave"
    >
      <path
        d="M-0.2,175H2560V0c0,0-392.2,136.9-909.9,136.9S881.5,13.6,452.3,13.6C175.7,13.6,0,44.1,0,44.1L-0.2,175z"
      />
    </svg>

    <div class="container position-relative">
      <div
        class="row row-cols-1 row-cols-md-2 d-md-flex justify-content-between align-items-center text-light py-4 py-md-5"
      >
        <div class="col">
          <div class="d-md-flex align-items-center mb-3 mb-md-0">
            <LogoComponent fill="#fff" width="4rem" />
            <span class="h2 mb-0">Will Wu</span>
          </div>
          <small></small>
          <!--  <ul class="d-flex mb-2 px-0 circle-btn">
            <li class="list-none me-3 text-center">
              <a
                href="https://ithelp.ithome.com.tw/users/20141250/ironman/4497"
                class="btn btn-outline-light rounded-circle"
                target="_blank"
              >
                <IthelpComponent fill="#fff" width="20px" />
              </a>
            </li>
            <li class="list-none me-3 text-center">
              <a
                href="https://www.behance.net/meng-che/projects"
                class="btn btn-outline-light rounded-circle d-flex justify-content-center align-items-center"
                target="_blank"
              >
                <font-awesome-icon icon="fa-brands fa-behance" />
              </a>
            </li>
            <li class="list-none me-3 text-center">
              <a
                href="mailto:letcla0624@gmail.com"
                class="btn btn-outline-light rounded-circle d-flex justify-content-center align-items-center"
              >
                <font-awesome-icon icon="fa-solid fa-envelope" />
              </a>
            </li>
            <li class="list-none text-center">
              <a
                href="tel:+886-912689501"
                class="btn btn-outline-light rounded-circle d-flex justify-content-center align-items-center"
              >
                <font-awesome-icon icon="fa-solid fa-mobile-button" />
              </a>
            </li>
          </ul> -->
        </div>
        <div class="col">
          <div class="row g-3 d-flex justify-content-center align-items-center">
            <div class="col">
              <a
                href="tel:+886-912689501"
                tabindex="0"
                class="btn btn-outline-default w-100"
                role="button"
                data-bs-toggle="popover"
                data-bs-placement="top"
                data-bs-content="+886-912689501"
                ref="popover"
              >
                <font-awesome-icon
                  icon="fa-solid fa-phone"
                  class="me-2"
                />聯絡電話
              </a>
            </div>
            <div class="col">
              <a
                href="mailto:letcla0624@gmail.com"
                tabindex="0"
                class="btn btn-outline-default w-100"
                role="button"
                data-bs-toggle="popover"
                data-bs-placement="top"
                data-bs-content="letcla0624@gmail.com"
                ref="popover2"
              >
                <font-awesome-icon
                  icon="fa-solid fa-envelope"
                  class="me-2"
                />聯絡信箱
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <p class="fs-8 text-secondary" ref="copyright"></p>
      </div>
    </div>
  </div>
</template>

<script>
/* global bootstrap */

import LogoComponent from "../logo/LogoComponent.vue";
// import IthelpComponent from "../logo/IthelpComponent.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(faBehance, faPhone, faEnvelope);

export default {
  data() {
    return {
      popover: null,
      popover2: null,
    };
  },
  props: ["detectWidth"],
  components: {
    LogoComponent,
    // IthelpComponent,
  },
  mounted() {
    const date = new Date();
    const year = date.getFullYear();
    this.$refs.copyright.innerText = `© ${year} WILL WU. All rights reserved. Designed By WILL WU. 建議瀏覽器使用電腦版Google Chrome 最新版本以獲得最佳瀏覽體驗。`;
    this.popover = new bootstrap.Popover(this.$refs.popover, {
      trigger: "hover",
    });
    this.popover2 = new bootstrap.Popover(this.$refs.popover2, {
      trigger: "hover",
    });
  },
};
</script>

<style lang="scss" scoped>
.circle-btn {
  a {
    width: 50px;
    height: 50px;
    .itHelp {
      margin-top: -3px;
      margin-left: -10px;
    }
    &:hover {
      .itHelp {
        fill: var(--bs-dark);
      }
    }
  }
}
@media (min-width: 767.98px) {
  .wave {
    margin-top: -7%;
  }
}
@media (max-width: 767.98px) {
  .wave {
    margin-top: -10%;
  }
}
@media (max-width: 575.98px) {
  .wave {
    margin-top: -11%;
  }
}
</style>
