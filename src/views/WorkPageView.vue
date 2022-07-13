<template>
  <WorkNavbarComponent />
  <RouterView />
  <FooterComponent />
</template>

<script>
import WorkNavbarComponent from "@/components/front/WorkNavbarComponent.vue";
import FooterComponent from "@/components/front/FooterComponent.vue";

export default {
  data() {
    return {
      theme: localStorage.getItem("theme"),
    };
  },
  components: {
    WorkNavbarComponent,
    FooterComponent,
  },
  mounted() {
    document.body.setAttribute("data-theme", this.theme);
  },
};
</script>

<style></style>
