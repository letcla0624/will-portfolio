<template>
  <div class="container">
    <!-- intro -->
    <section>
      <div class="d-md-flex align-items-center text-start border-bottom py-5">
        <div class="col-12 col-md-6 pe-0 pe-sm-3 mb-5 mb-md-0">
          <div v-if="isLoading === true"></div>
          <div v-else>
            <h1>
              <VueWriter
                :array="arr"
                :iterations="1"
                :typeSpeed="70"
                :start="800"
              />
            </h1>
            <p class="d-inline">
              <VueWriter
                :array="arr2"
                :iterations="1"
                :typeSpeed="70"
                :start="2500"
                class="fs-4 fw-normal d-inline"
              />
              <VueWriter
                :array="arr3"
                :iterations="1"
                :typeSpeed="70"
                :start="4500"
                :delay="300"
                class="fs-4 fw-bold d-inline text-default"
              />
              <VueWriter
                :array="arr4"
                :iterations="1"
                :typeSpeed="70"
                :start="8500"
                class="fs-4 fw-normal d-inline"
              />
            </p>
          </div>
          <a
            href="./Will-resume-cn.pdf"
            class="btn btn-dark mt-4 d-none d-md-inline-block"
            target="_blank"
          >
            <i class="bi bi-file-earmark-pdf-fill me-1"></i>下載履歷
          </a>
        </div>
        <div class="col-12 col-md-6">
          <img
            v-lazy="{ src: require('@/assets/images/me.svg') }"
            alt="Hi"
            class="w-100"
          />
          <a
            href="./Will-resume-cn.pdf"
            class="btn btn-dark mt-4 d-block d-md-none"
            target="_blank"
          >
            <i class="bi bi-file-earmark-pdf-fill me-1"></i>下載履歷
          </a>
        </div>
      </div>
    </section>
    <!-- main projects -->
    <section>
      <div class="mt-lg-5">
        <div class="text-center my-5">
          <h3 class="mb-3">開發項目</h3>
          <p class="text-secondary">
            網頁因作品所有權問題，不便於網站上提供原始碼，可於面試時展示頁面，恕無法提供任何檔案。
          </p>
        </div>
        <div class="row row-cols-1 row-cols-md-2 g-3">
          <div class="col mb-5" v-for="item in works" :key="item.id">
            <div class="card bg-transparent border-0 mb-6">
              <RouterLink :to="`/works/${item.url}`">
                <img
                  v-lazy="{ src: `${item.img}` }"
                  :alt="item.alt"
                  class="card-img-top rounded-lg"
                />
                <div class="card-body px-0">
                  <span
                    class="badge bg-light text-dark p-2 mb-2 me-2"
                    v-for="skill in item.skills"
                    :key="skill.id"
                  >
                    {{ skill }}
                  </span>
                  <div
                    class="row justify-content-sm-between align-items-end mt-3"
                  >
                    <div>
                      <div class="d-flex align-items-center">
                        <h3 class="card-title text-dark fs-5">
                          {{ item.title }}
                        </h3>
                        <p class="fs-7 fw-bold ms-2 mb-2 text-default">
                          {{ item.year }}
                        </p>
                      </div>
                      <p class="card-text text-secondary">
                        {{ item.description }}
                      </p>
                    </div>
                    <div class="col-lg-4 mt-4 ms-auto">
                      <RouterLink
                        :to="`/works/${item.url}`"
                        class="btn btn-outline-dark w-100"
                      >
                        <i class="bi bi-arrow-right me-2"></i>Entry
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- side projects -->
    <section>
      <div class="text-center my-5">
        <h3 class="mb-3">個人項目</h3>
        <p class="text-secondary">
          學習前端技術後，加入過往設計經驗，自己構思主題所練習的作品。
        </p>
      </div>
      <div class="row row-cols-1 row-cols-md-2 g-3">
        <div
          class="col offset-md-3 mb-5"
          v-for="item in personals"
          :key="item.id"
        >
          <div class="card bg-transparent border-0 mb-6">
            <a :href="`${item.url}`" target="_blank">
              <img
                v-lazy="{ src: `${item.img}` }"
                :alt="item.alt"
                class="card-img-top rounded-lg"
              />

              <div class="card-body px-0">
                <span
                  class="badge bg-light text-dark p-2 me-2 mb-2"
                  v-for="skill in item.skills"
                  :key="skill.id"
                >
                  {{ skill }}
                </span>
                <div
                  class="row justify-content-sm-between align-items-end mt-3"
                >
                  <div>
                    <div class="d-flex align-items-center">
                      <h3 class="card-title text-dark fs-5">
                        {{ item.title }}
                      </h3>
                      <p class="fs-7 fw-bold mb-2 ms-2 text-default">
                        {{ item.year }}
                      </p>
                    </div>
                    <p class="card-text text-secondary">
                      {{ item.description }}
                    </p>
                  </div>
                  <div class="col-lg-4 mt-4 ms-auto">
                    <a
                      :href="`${item.url}`"
                      class="btn btn-outline-dark w-100"
                      target="_blank"
                    >
                      <i class="bi bi-arrow-right me-2"></i>Entry
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- tailwind CSS practices -->
    <section class="pb-5 mb-5">
      <div class="text-center my-5">
        <h3 class="mb-3">用 Tailwind CSS 製作的畫面</h3>
        <p class="text-secondary">點擊外連 CODEPEN。</p>
      </div>
      <div class="row row-cols-1 row-cols-lg-2 g-3">
        <div class="col" v-for="item in tailwinds_first" :key="item.id">
          <div class="hoverbox">
            <a :href="`${item.url}`" target="_blank">
              <img
                v-lazy="{ src: `${item.img}` }"
                :alt="`${item.title}`"
                class="rounded-lg w-100 d-block"
              />
              <div
                class="hoverbox-content d-flex justify-content-center align-items-center rounded-lg"
              >
                <div class="text-content text-center text-white">
                  <p class="fw-bold fs-4 mb-0">{{ item.title }}</p>
                  <p class="mb-0">{{ item.description }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="col">
          <div class="row row-cols-1 row-cols-md-2 g-3">
            <div class="col" v-for="item in tailwinds_others" :key="item.id">
              <div class="hoverbox">
                <a :href="`${item.url}`" target="_blank">
                  <img
                    v-lazy="{ src: `${item.img}` }"
                    :alt="`${item.title}`"
                    class="rounded-lg w-100 d-block"
                  />
                  <div
                    class="hoverbox-content d-flex justify-content-center align-items-center rounded-lg"
                  >
                    <div class="text-content text-center text-white">
                      <p class="fw-bold fs-4 mb-0">{{ item.title }}</p>
                      <p class="mb-0">{{ item.description }}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="bg-texture pb-5" id="bg-change">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-100"
      id="bg-cloud"
      viewBox="0 0 1024 298.9"
      fill="#fff"
    >
      <path
        d="M1024,0H0v67c13.5,3.5,27.7,5.4,42.3,5.4c14.7,0,28.9-1.9,42.5-5.5c20.8,34.3,58.4,57.2,101.4,57.2
        c12,0,23.7-1.8,34.6-5.1c16.3,28.8,47.2,48.2,82.6,48.2c1.5,0,2.9,0,4.4-0.1C343,233.8,413,279.2,493.7,279.2
        c89,0,165.1-55.3,195.8-133.5c17.3,6.1,35.9,9.4,55.2,9.4c76,0,140.1-51,159.9-120.6c23,12.1,49.2,18.9,77.1,18.9
        c14.6,0,28.8-1.9,42.3-5.4V0z"
      />
    </svg>
    <div class="container pb-5">
      <div class="row">
        <div class="col-sm-6 offset-sm-3">
          <img
            v-lazy="{ src: require('@/assets/images/dream.svg') }"
            alt="Will"
            class="w-100"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueWriter from "vue-writer";

export default {
  data() {
    return {
      arr: ["嗨, 我是孟哲。"],
      arr2: ["一位認真思考設計和懂一點前端技術的"],
      arr3: ["產品設計...", " UI / WEB 前端設計師。"],
      arr4: ["目前正積極學習前端技能，技能樹正往前端工程師蔓延中。"],
      works: [],
      personals: [],
      tailwinds_first: [],
      tailwinds_others: [],
      galleryID: "figma-gallery",
      isLoading: false,
    };
  },
  props: ["detectWidth"],
  components: {
    VueWriter,
  },
  methods: {
    getWorkItems() {
      let loader = this.$loading.show();
      this.isLoading = true;

      fetch(`${process.env.VUE_APP_API}/works`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          loader.hide();
          this.isLoading = false;
          this.works = res;
        })
        .catch((err) => {
          loader.hide();
          this.isLoading = false;
          console.dir(err);
        });
    },
    getPersonalItems() {
      fetch(`${process.env.VUE_APP_API}/personals`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          this.personals = res;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    getTailwindItems() {
      fetch(`${process.env.VUE_APP_API}/tailwinds`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          this.tailwinds_first = res[0].first;
          this.tailwinds_others = res[1].others;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  mounted() {
    this.getWorkItems();
    this.getPersonalItems();
    this.getTailwindItems();
  },
};
</script>

<style lang="scss" scoped>
.is-typed span.cursor {
  display: none;
}
.bg-texture {
  background: url(@/assets/images/texture.gif) center center repeat;
}
.hoverbox {
  position: relative;
  overflow: hidden;
  .hoverbox-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.75);
    transition: opacity 0.3s;
  }
  &:hover {
    .hoverbox-content {
      opacity: 1;
    }
  }
}
</style>
