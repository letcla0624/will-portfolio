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
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 px-2">
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
          <li class="nav-item px-2 d-lg-none">
            <a href="./Will-resume-cn.pdf" class="nav-link" target="_blank">
              下載履歷
            </a>
          </li>
          <li class="nav-item d-lg-none">
            <div class="btn btn-light" @click="toggleMode">
              <span class="me-3">Now Theme</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="mode"
                viewBox="0 0 16 16"
                ref="darkMode"
                :class="{ darkMode: darkMode }"
              >
                <g v-if="darkMode">
                  <path
                    d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
                  />
                  <path
                    d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
                  />
                </g>
                <path
                  v-else
                  d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                />
              </svg>
            </div>
          </li>
        </ul>
        <div
          class="d-none d-lg-flex align-items-center justify-content-center ps-3 border-start border-gray-300"
        >
          <div class="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="mode"
              viewBox="0 0 16 16"
              @click="toggleMode"
              ref="darkMode"
              :class="{ darkMode: darkMode }"
            >
              <g v-if="darkMode">
                <path
                  d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
                />
                <path
                  d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
                />
              </g>
              <path
                v-else
                d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
              />
            </svg>
          </div>
          <a href="./Will-resume-cn.pdf" target="_blank" class="ps-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-file-earmark-pdf"
              viewBox="0 0 16 16"
            >
              <path
                d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"
              />
              <path
                d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z"
              />
            </svg>
          </a>
        </div>
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
  // width: 22px;
  // height: 22px;
  cursor: pointer;
}
.mode:hover {
  fill: var(--bs-default);
}
</style>
