<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white sticky-top"
    :class="{ shadow: isScroll }"
  >
    <div class="container align-items-center">
      <RouterLink to="/" class="navbar-brand d-flex align-items-center py-0">
        <LogoComponent fill="bg-dark" style="width: 2.5rem" />
        <span class="fs-5 text-dark fw-bold">Will Wu</span>
      </RouterLink>
      <div class="d-flex align-items-center d-lg-none">
        <button
          class="navbar-toggler drawer-hamburger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref="hamburger"
          @click="toggleBtn"
        >
          <span class="drawer-hamburger-icon"></span>
        </button>
      </div>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        ref="navbarCollapse"
      >
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 px-3">
          <li class="nav-item px-2">
            <RouterLink
              to="/"
              class="nav-link"
              aria-current="page"
              @click="closeNavbar"
              >作品集</RouterLink
            >
          </li>
          <li class="nav-item px-2">
            <RouterLink to="/about" class="nav-link" @click="closeNavbar"
              >關於我</RouterLink
            >
          </li>
          <!-- <li class="nav-item">
            <RouterLink to="/resume" class="nav-link">履歷表</RouterLink>
          </li> -->
          <li class="nav-item" style="padding: 6px 1rem">
            <svg
              class="mode"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              @click="toggleMode"
              ref="darkMode"
              :class="{ darkMode: darkMode }"
            >
              <path
                v-if="darkMode"
                id="moon"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
              <path
                v-else
                id="sun"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </li>
        </ul>
        <a href="./Will-resume-cn.pdf" class="btn btn-dark" target="_blank">
          <i class="bi bi-file-earmark-arrow-down-fill me-1"></i>下載履歷
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import LogoComponent from "@/components/logo/LogoComponent";
import emitter from "@/utility/emitter.js";

export default {
  data() {
    return {
      isScroll: false,
      darkMode: false,
      theme: localStorage.getItem("theme"),
    };
  },
  components: {
    LogoComponent,
  },
  methods: {
    toggleBtn() {
      this.$refs.hamburger.classList.toggle("drawer-open");
    },
    toggleMode() {
      this.$refs.darkMode.classList.toggle("darkMode");
      this.whichMode();
    },
    whichMode() {
      if (this.$refs.darkMode.classList.contains("darkMode")) {
        this.darkMode = true;
        emitter.emit("darkMode");
        localStorage.setItem("theme", "dark");
      } else {
        this.darkMode = false;
        emitter.emit("lightMode");
        localStorage.setItem("theme", "light");
      }
    },
    closeNavbar() {
      this.$refs.hamburger.classList.remove("drawer-open");
      this.$refs.navbarCollapse.classList.remove("show");
    },
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

    if (this.theme === "dark") {
      this.$refs.darkMode.classList.add("darkMode");
      this.whichMode();
    } else {
      this.$refs.darkMode.classList.remove("darkMode");
      this.whichMode();
    }
  },
};
</script>

<style lang="scss" scoped>
.drawer-hamburger {
  z-index: 104;
  top: 0;
  display: block;
  box-sizing: content-box;
  width: 2rem;
  padding: 15px 0.5rem 23px;
  transform: translate3d(0, 0, 0);
  border: 0;
  outline: 0;
  background-color: transparent;
  @media (min-width: 992px) {
    display: none;
  }
  .drawer-hamburger-icon {
    position: relative;
    display: block;
    margin-top: 10px;
    width: 100%;
    height: 2px;
    transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    background-color: var(--bs-dark);
    &:before,
    &:after {
      position: absolute;
      content: "";
      top: -10px;
      left: 0;
      width: 100%;
      height: 2px;
      transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
      background-color: var(--bs-dark);
    }
    &:after {
      top: 10px;
    }
  }
}
.drawer-open {
  .drawer-hamburger-icon {
    background-color: transparent !important;
    &:before,
    &:after {
      top: 0;
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
}
.mode {
  width: 22px;
  height: 22px;
  cursor: pointer;
}
.mode:hover {
  stroke: var(--bs-default);
}
</style>
