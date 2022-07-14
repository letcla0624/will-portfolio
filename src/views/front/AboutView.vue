<template>
  <div class="container">
    <div class="row my-sm-5">
      <div class="col-xl-10 offset-xl-1">
        <!-- intro -->
        <div class="border-bottom pb-5">
          <div class="row align-items-center">
            <div class="col-md-6 col-lg-4 col-xl-5">
              <div class="position-relative" id="photocase">
                <img
                  v-lazy="{ src: require('@/assets/images/me.jpg') }"
                  alt="Will"
                  class="w-100"
                  :class="{
                    'rounded-lg': detectWidth >= 992,
                  }"
                />
              </div>
              <div
                class="d-flex d-lg-none align-items-center bg-dark text-light experience p-3"
              >
                <p class="display-1 h1 fw-bold mb-0 me-3">6</p>
                <div>
                  <p class="h6 mb-0">Years</p>
                  <p class="h5 lh-base mb-0">網頁設計與開發經驗</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-8 col-xl-7">
              <h2 class="mb-3 mt-4 mt-md-0">我是孟哲 (Will Wu)，</h2>
              <article
                class="tracking-widest text-secondary fs-5d5 lh-lg"
                style="text-align: justify"
              >
                <p>
                  是一名 UI / WEB 前端設計師，在迅速成長的年輕初創公司中進行了
                  <em class="text-dark text-decoration-underline"
                    >六年的設計與開發</em
                  >
                  ，認為能解決問題的才是好設計，因此我會
                  <em class="text-dark text-decoration-underline">
                    傾聽並觀察用戶的行為和習慣，透過需求，從使用者的角度去思考問題，並且致力於帶給使用者更多價值，以優化他們的體驗。
                  </em>
                </p>
                <p>
                  我一心一意且頗具競爭力，
                  <em class="text-dark text-decoration-underline">
                    心思細膩、認真、負責是我對工作的態度，能團隊合作亦能獨立開發
                  </em>
                  ，並認為自己是「永遠的學生」，
                  <em class="text-dark text-decoration-underline">
                    目前正在強化自己的前端技能，渴望能在設計和程式上能不斷地成長進步
                  </em>
                  ，並隨時能和公司策略目標保持一致。
                </p>
                <p>
                  人生就是不斷的學習與挑戰，閒暇之餘透過閱讀、運動、攝影、爬山和參與講座等來實現設計中的靈感及工作中的正能量。
                </p>
              </article>
            </div>
          </div>
        </div>
        <!-- pro -->
        <div class="row py-5">
          <div class="col-12 pb-5">
            <div class="mb-5">
              <h2 class="fs-4 text-center p-3 mb-0">我擅長</h2>
            </div>
            <ul class="ps-0 d-inline">
              <li
                v-for="item in strength"
                :key="item.id"
                class="badge bg-light text-dark fs-8 tracking-widest p-3 m-2"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="col-12">
            <h3 class="fs-5d5 mb-4">會使用</h3>
            <ul class="ps-0 mb-0">
              <li
                v-for="item in useToolIcons"
                :key="item.id"
                class="toolImg text-center"
              >
                <img v-lazy="{ src: `${item.img}` }" :alt="`${item.alt}`" />
                <p class="fs-8 fw-bold text-secondary">{{ item.alt }}</p>
              </li>
            </ul>
            <!-- <ul class="ps-0 mb-0">
              <li class="toolImg text-center">
                <img src="@/assets/images/tool-icon/icon-01.svg" alt="HTML 5" />
                <p class="fs-8 fw-bold text-secondary">HTML 5</p>
              </li>
              <li class="toolImg text-center">
                <img src="@/assets/images/tool-icon/icon-02.svg" alt="CSS 3" />
                <p class="fs-8 fw-bold text-secondary">CSS 3</p>
              </li>
              <li class="toolImg text-center">
                <img
                  src="@/assets/images/tool-icon/icon-03.svg"
                  alt="JavaScript"
                />
                <p class="fs-8 fw-bold text-secondary">JS</p>
              </li>
              <li class="toolImg text-center">
                <img src="@/assets/images/tool-icon/icon-04.svg" alt="JQuery" />
                <p class="fs-8 fw-bold text-secondary">JQ</p>
              </li>
              <li class="toolImg text-center">
                <img
                  src="@/assets/images/tool-icon/icon-05.svg"
                  alt="Bootstrap"
                />
                <p class="fs-8 fw-bold text-secondary">Bootstrap</p>
              </li>
              <li class="toolImg text-center">
                <img
                  src="@/assets/images/tool-icon/icon-06.svg"
                  alt="Visual Studio Code"
                />
                <p class="fs-8 fw-bold text-secondary">VS Code</p>
              </li>
              <li class="toolImg text-center mr-2">
                <img
                  src="@/assets/images/tool-icon/icon-07.svg"
                  alt="Photoshop"
                />
                <p class="fs-8 fw-bold text-secondary">Photoshop</p>
              </li>
              <li class="toolImg text-center">
                <img
                  src="@/assets/images/tool-icon/icon-08.svg"
                  alt="Illustrator"
                />
                <p class="fs-8 fw-bold text-secondary">Illustrator</p>
              </li>
              <li class="toolImg text-center">
                <img src="@/assets/images/tool-icon/icon-09.svg" alt="Figma" />
                <p class="fs-8 fw-bold text-secondary">Figma</p>
              </li>
              <li class="toolImg text-center">
                <img src="@/assets/images/tool-icon/icon-10.svg" alt="Sketch" />
                <p class="fs-8 fw-bold text-secondary">Sketch</p>
              </li>
              <li class="toolImg text-center">
                <img
                  src="@/assets/images/tool-icon/icon-11.svg"
                  alt="inVision"
                />
                <p class="fs-8 fw-bold text-secondary">inVision</p>
              </li>
            </ul> -->
            <article class="tracking-widest text-secondary lh-1d8">
              <p>
                目前使用
                <span class="fw-bold text-dark">Figma</span>
                已經可以完成我設計流程上的各種需求，之後用 VS Code 撰寫
                <span class="fw-bold text-dark"
                  >HTML5、SCSS、JavaScript 或使用 Vue CLI 導入 Vue 3 框架</span
                >，並引入
                <span class="fw-bold text-dark">Bootstrap 或 Tailwind CSS</span>
                進行開發，也可串接
                <span class="fw-bold text-dark">API</span>
                ，最後用
                <span class="fw-bold text-dark">Git</span>
                或 Sourcetree 上傳到 Github 進行版控。
              </p>
            </article>
          </div>
        </div>
        <!-- 軟實力 -->
        <div class="row py-5">
          <div class="col-12">
            <div class="mb-5">
              <h2 class="fs-4 text-center p-3 mb-0">軟實力</h2>
            </div>
            <div class="row row-cols-md-2 gx-3">
              <div class="mb-3">
                <div
                  class="position-relative card bg-light border-0 rounded-0 p-4"
                >
                  <div
                    class="position-absolute cube border border-default border-3 border-end-0 border-bottom-0"
                  ></div>
                  <div class="card-body">
                    <h5 class="card-title mb-4">團隊合作</h5>
                    <p class="card-text fs-7 text-secondary">
                      在團隊中尊重他人意見，以中立的角度討論事情，共同創造價值，一起達成目標。
                    </p>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <div
                  class="position-relative card bg-light border-0 rounded-0 p-4"
                >
                  <div
                    class="position-absolute cube border border-default border-3 border-end-0 border-bottom-0"
                  ></div>
                  <div class="card-body">
                    <h5 class="card-title mb-4">跨部門溝通</h5>
                    <p class="card-text fs-7 text-secondary">
                      因本身會設計也能寫一點前端程式，能更加有效的和跨部門相關領域人員溝通。
                    </p>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <div
                  class="position-relative card bg-light border-0 rounded-0 p-4"
                >
                  <div
                    class="position-absolute cube border border-default border-3 border-end-0 border-bottom-0"
                  ></div>
                  <div class="card-body">
                    <h5 class="card-title mb-4">解決問題</h5>
                    <p class="card-text fs-7 text-secondary">
                      在新創團隊的成長下，能更有效地發現問題和團隊溝通並快速地執行解決方案。
                    </p>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <div
                  class="position-relative card bg-light border-0 rounded-0 p-4"
                >
                  <div
                    class="position-absolute cube border border-default border-3 border-end-0 border-bottom-0"
                  ></div>
                  <div class="card-body">
                    <h5 class="card-title mb-4">持續學習</h5>
                    <p class="card-text fs-7 text-secondary">
                      在設計和前端不斷地快速演變下，依舊持續的精進自身能力，提醒自己不進則退。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- learn -->
        <div class="row py-5">
          <div class="col-12">
            <div class="mb-5">
              <h2 class="fs-4 text-center p-3 mb-0">近期學習</h2>
            </div>
            <h3 class="fs-5d5 mb-4">程式框架</h3>
            <ul class="ps-0 mb-0">
              <li
                v-for="item in learnToolIcons"
                :key="item.id"
                class="toolImg text-center"
              >
                <img v-lazy="{ src: `${item.img}` }" :alt="`${item.alt}`" />
                <p class="fs-8 fw-bold text-secondary">{{ item.alt }}</p>
              </li>
            </ul>
            <article class="tracking-widest text-secondary lh-1d8">
              <p>
                本個人網站使用了
                <span class="fw-bold text-dark">
                  Bootstrap 5、SCSS、Vue CLI、Vue 3 及 ESLint 和 JSON Server
                </span>
                。也參加了第 13 屆 IT 邦幫忙鐵人賽自我挑戰組 －
                <a
                  href="https://ithelp.ithome.com.tw/users/20141250/ironman/4497"
                  target="_blank"
                  class="text-default fw-bold text-decoration-underline"
                >
                  「初見 Tailwind CSS 系列」
                </a>
                ，並完成鐵人鍊成。
              </p>
              <img src="@/assets/images/it-help.png" alt="鐵人鍊成" />
            </article>
          </div>
          <div class="col-12 py-5">
            <h3 class="fs-5d5 mb-4">完課證明</h3>
            <SwiperComponent
              :imagesData="certificates"
              :galleryID="galleryID"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperComponent from "@/components/front/SwiperComponent.vue";

export default {
  data() {
    return {
      galleryID: "certificates-gallery",
      strength: [],
      certificates: [],
      useToolIcons: [],
      learnToolIcons: [],
    };
  },
  props: ["detectWidth"],
  components: {
    SwiperComponent,
  },
  methods: {
    getStrength() {
      fetch(`${process.env.VUE_APP_API}/strength`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          this.strength = res;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    getCertificates() {
      let loader = this.$loading.show();

      fetch(`${process.env.VUE_APP_API}/certificates`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          loader.hide();
          this.certificates = res;
        })
        .catch((err) => {
          loader.hide();
          console.dir(err);
        });
    },
    getToolIcons() {
      fetch(`${process.env.VUE_APP_API}/toolIcons`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          this.useToolIcons = res.slice(0, 11);
          this.learnToolIcons = res.slice(12);
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  mounted() {
    this.getCertificates();
    this.getStrength();
    this.getToolIcons();
  },
};
</script>

<style lang="scss" scoped></style>
