import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

// 引入 Bootstrap 5
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;
import "@/assets/scss/all.scss";
import "bootstrap-icons/font/bootstrap-icons.scss";

/* 引入 FontAwesome 6 */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// 引入 Axios
import axios from "axios";
import VueAxios from "vue-axios";

// 引入 VueLoading
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

// 引入 VueLazyLoad
import VueLazyLoad from "vue3-lazyload";

// 引入 aos
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();

// 引入 smoothscroll
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

const app = createApp(App);
app.use(router);

// 使用 VueAxios plugin
app.use(VueAxios, axios);

// 使用 VueLoading plugin
app.use(VueLoading, {
  color: "var(--bs-orange)",
  loader: "bars",
});

// 使用 VueLazyLoad
app.use(VueLazyLoad);

// 使用 FontAwesome Icon
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
