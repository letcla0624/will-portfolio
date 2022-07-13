<template>
  <NavbarComponent />
  <RouterView :detectWidth="detectWidth" />
  <FooterComponent :detectWidth="detectWidth" />
</template>

<script>
import NavbarComponent from "@/components/front/NavbarComponent.vue";
import FooterComponent from "@/components/front/FooterComponent.vue";
import emitter from "@/utility/emitter.js";

export default {
  data() {
    return {
      detectWidth: null,
      theme: localStorage.getItem("theme"),
    };
  },
  components: {
    NavbarComponent,
    FooterComponent,
  },
  mounted() {
    this.detectWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      this.detectWidth = window.innerWidth;
    });

    document.body.setAttribute("data-theme", this.theme);

    emitter.on("darkMode", () => {
      document.body.setAttribute("data-theme", "dark");
    });
    emitter.on("lightMode", () => {
      document.body.setAttribute("data-theme", "light");
    });
  },
};
</script>
