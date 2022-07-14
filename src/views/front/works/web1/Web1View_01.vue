<template>
  <div class="container py-5 mb-5">
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h1 class="mb-3">愛月嫂－頁面迭代設計</h1>
          <p class="fs-5d5 text-secondary">
            在現行網站中，因應客戶、合作廠商及公司目標，也為了達成頁面一制性，統一了色系、樣式及風格，不定期將網頁改版。
          </p>
          <div class="mt-5">
            <h2 class="fs-5 mb-4">使用工具</h2>
            <ul class="ps-0">
              <li
                v-for="item in useToolIcons"
                :key="item.id"
                class="toolImg text-center"
              >
                <img v-lazy="{ src: `${item.img}` }" :alt="`${item.alt}`" />
                <p class="fs-8 fw-bold text-secondary">{{ item.alt }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">・・・</div>
    <div class="row mt-5 mb-3">
      <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <h2>Part 1－頁面改版設計</h2>
      </div>
    </div>
    <!-- 首頁 -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <div class="">
            <h2 class="fs-3 mb-4">1. 首頁</h2>
            <article class="lh-1d8">
              <p>
                上一版本中，因新開發了 Line
                Bot，直接使用Line官方帳號就可以發送您的需求到服務提供者手上，為增加Line官方會員數以配合
                Line Bot 的使用，將加入 Line
                會員的連結和使用方式及流程，直接呈現在一進入的頁面中。
              </p>
              <div class="my-4">
                <h3 class="fs-5">痛點：</h3>
                <ol>
                  <li>
                    Line
                    官方會員數達到一定數量後，增加的速度趨緩，經後台數據顯示，還是以
                    Facebook 加入會員的人佔大多數。
                  </li>
                  <li>搜尋服務在子選單裡，人員搜尋不易。</li>
                  <li>廣告及廠商沒更多位置曝光。</li>
                  <li>新服務在子選單裡，用戶較不會點擊進入。</li>
                </ol>
              </div>
              <div class="my-4">
                <h3 class="fs-5">分析原因：</h3>
                <ol>
                  <li>
                    國外客戶大多數並沒有使用Line的習慣，而是以 WeChat 和
                    Facebook 為主。
                  </li>
                  <li>
                    對於還在瀏覽的潛在客戶來說，註冊對其來說還未有任何必要性。
                  </li>
                </ol>
              </div>
              <div class="my-4">
                <h3 class="fs-5">解決方式：</h3>
                <ol>
                  <li>
                    將加入 Line 官方會員的連結往下放，讓想嘗試 Line Bot
                    的人還是可以方便使用。
                  </li>
                  <li>進入頁面加入給知道需求的用戶快速搜尋。</li>
                  <li>下方新增廣告連結版位。</li>
                  <li>重新修改過服務版面，更直覺選擇需求進入內頁。</li>
                </ol>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <div
              class="row justify-content-center align-items-start g-2 g-lg-4 py-3 py-lg-5"
            >
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/index-1.jpg'),
                  }"
                  alt="舊首頁"
                  class="shadow rounded-lg w-100"
                />
              </div>
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/index-2.jpg'),
                  }"
                  alt="首頁修正"
                  class="shadow rounded-lg w-100"
                />
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 原始首頁 VS.
              重新設計的首頁
            </p>
          </div>
          <div class="text-center">
            <div class="py-3 py-lg-5">
              <img
                v-lazy="{
                  src: require('@/assets/images/iaunty-redesign/index-3.jpg'),
                }"
                alt="首頁 Line 註冊修正"
                class="shadow rounded-lg w-100"
              />
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>重新設計的 Line 註冊
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">・・・</div>
    <!-- 嚴選月嫂頁 -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <div class="">
            <h2 class="fs-3 mb-4">2. 嚴選月嫂頁</h2>
            <article class="lh-1d8">
              <p>
                過往頁面中，公司列出全部上架的月嫂，無法篩選，頂多就是使用排序方式讓客戶瀏覽，用戶需個別點擊進入月嫂內頁查看。
              </p>
              <div class="my-4">
                <h3 class="fs-5">痛點：</h3>
                <ol>
                  <li>人員搜尋不易。</li>
                  <li>價格不明確。</li>
                  <li>不知月嫂等級。</li>
                  <li>評價只有心心數。</li>
                  <li>愛月嫂推薦標籤被弱化。</li>
                  <li>沒有更多篩選機制。</li>
                  <li>手機版分頁不易點選。</li>
                  <li>年齡會影響該月嫂的點擊率。</li>
                </ol>
              </div>
              <div class="my-4">
                <h3 class="fs-5">解決方式：</h3>
                <ol>
                  <li>將服務分類。</li>
                  <li>
                    在卡片式月嫂下標示出價格，並標明金牌月嫂的 ICON
                    ，將所有月嫂標明等級，會導致頁面過於雜亂。
                  </li>
                  <li>將心心數以小數點一位方式量化。</li>
                  <li>使用浮動式顯示愛月嫂推薦標籤。</li>
                  <li>
                    讓左側變成用戶篩選項目（包含可服務日期、地區、證照、等級......）。
                  </li>
                  <li>
                    以 Infinite Scroll
                    方式，使用載入更多按鈕向下載入，以取代分頁按鈕。
                  </li>
                  <li>弱化月嫂年齡。</li>
                </ol>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <div
              class="row justify-content-center align-items-center g-2 g-lg-4 py-3 py-lg-5"
            >
              <div class="col-5">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/aunties-1.jpg'),
                  }"
                  alt="舊嚴選月嫂"
                  class="shadow rounded-lg w-100"
                />
              </div>
              <div class="col-7">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/aunties-2.jpg'),
                  }"
                  alt="嚴選月嫂修正"
                  class="shadow rounded-lg w-100"
                />
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 原始嚴選月嫂頁 VS.
              重新設計的嚴選月嫂頁
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">・・・</div>
    <!-- 月嫂個人頁 -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <div class="">
            <h2 class="fs-3 mb-4">3. 月嫂個人頁</h2>
            <article class="lh-1d8">
              <div class="my-4">
                <h3 class="fs-5">痛點：</h3>
                <ol>
                  <li>過多帶有主色系的標籤。</li>
                  <li>有的月嫂工作及菜色照片太少。</li>
                  <li>不知這位月嫂有提供哪些服務（如保母服務等）。</li>
                  <li>覺得不錯想預訂時才發現時間無法配和。</li>
                </ol>
              </div>
              <div class="my-4">
                <h3 class="fs-5">解決方式：</h3>
                <ol>
                  <li>將瀏覽的標籤以文字化方式呈現。</li>
                  <li>
                    將工作及菜色照放置在主頭像區塊，變化為 Slider 方式切換。
                  </li>
                  <li>在基本資料區塊加入提供的服務。</li>
                  <li>
                    需求日期依照前面嚴選月嫂頁的篩選方式先行篩選，而桌機版也將月嫂行事曆放置在上方。
                  </li>
                </ol>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <div
              class="row justify-content-center align-items-start g-2 g-lg-4 py-3 py-lg-5"
            >
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/aunty-1.jpg'),
                  }"
                  alt="舊月嫂個人頁"
                  class="shadow rounded-lg w-100"
                />
              </div>
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/aunty-2.jpg'),
                  }"
                  alt="月嫂個人頁修正"
                  class="shadow rounded-lg w-100"
                />
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 原始月嫂個人頁 VS.
              重新設計的月嫂個人頁
            </p>
          </div>
          <div class="text-center">
            <div class="py-3 py-lg-5">
              <img
                v-lazy="{
                  src: require('@/assets/images/iaunty-redesign/aunty-3.jpg'),
                }"
                alt="月嫂各項能力圖"
                class="shadow rounded-lg w-100"
              />
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>新增月嫂各項能力數值
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">・・・</div>
    <!-- 服務費用頁 -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <div class="">
            <h2 class="fs-3 mb-4">4. 服務費用頁</h2>
            <article class="lh-1d8">
              <div class="my-4">
                <h3 class="fs-5">痛點：</h3>
                <ol>
                  <li>客戶嫌麻煩，只是在比價，還必須自己換算一天的價格。</li>
                  <li>網頁價格只是最低價，預訂價格往往比呈現的要高。</li>
                  <li>客戶不想要價格過高的月嫂或是新手月嫂。</li>
                  <li>面試前不明確月嫂等級及經驗。</li>
                </ol>
              </div>
              <div class="my-4">
                <h3 class="fs-5">解決方式：</h3>
                <ol>
                  <li>
                    將月嫂分級，並標示這級別月嫂每天最低時數費用，價格將不至於落差太大。
                  </li>
                  <li>天數部分將於預訂單時做選擇，客戶可依自身需求做調整。</li>
                  <li>
                    每個等級的月嫂顯示最低的經驗、服務人數及評價值，客戶可參考所需月嫂等級。
                  </li>
                </ol>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <div
              class="row justify-content-center align-items-start g-2 g-lg-4 py-3 py-lg-5"
            >
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/fee-1.jpg'),
                  }"
                  alt="舊服務費用頁"
                  class="shadow rounded-lg w-100"
                />
              </div>
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/fee-2.jpg'),
                  }"
                  alt="服務費用頁修正"
                  class="shadow rounded-lg w-100"
                />
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 原始服務費用頁 VS.
              重新設計的服務費用頁
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">・・・</div>
    <!-- 課程活動頁 -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <div class="">
            <h2 class="fs-3 mb-4">5. 課程活動頁</h2>
            <article class="lh-1d8">
              <div class="my-4">
                <h3 class="fs-5">痛點：</h3>
                <ol>
                  <li>不知道上課地點。</li>
                  <li>不知名額額滿沒。</li>
                  <li>不知要上什麼課程。</li>
                </ol>
              </div>
              <div class="my-4">
                <h3 class="fs-5">解決方式：</h3>
                <ol>
                  <li>將課程以卡片式方式呈現。</li>
                  <li>
                    卡片上標示上課地區及人數，名額快額滿時將標示剩幾位名額。
                  </li>
                  <li>
                    增加課程地圖清楚知道自己及課程階段，方便學員依自身能力選擇所需課程。
                  </li>
                </ol>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <div
              class="row justify-content-center align-items-start g-2 g-lg-4 py-3 py-lg-5"
            >
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/class-1.jpg'),
                  }"
                  alt="舊課程活動頁"
                  class="shadow rounded-lg w-100"
                />
              </div>
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/class-2.jpg'),
                  }"
                  alt="課程活動頁修正"
                  class="shadow rounded-lg w-100"
                />
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 原始課程活動頁 VS.
              重新設計的課程活動頁
            </p>
          </div>
          <div class="text-center">
            <div class="py-3 py-lg-5">
              <img
                v-lazy="{
                  src: require('@/assets/images/iaunty-redesign/class-3.jpg'),
                }"
                alt="課程地圖"
                class="shadow rounded-lg w-100"
              />
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>新增課程地圖
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">・・・</div>
    <!-- 部落格頁 -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <div class="">
            <h2 class="fs-3 mb-4">6. 部落格</h2>
            <article class="lh-1d8">
              <div class="my-4">
                <h3 class="fs-5">痛點：</h3>
                <ol>
                  <li>主頁一次性瀏覽文章篇幅太少。</li>
                  <li>無法快速知道哪些文章主題較熱門。</li>
                  <li>安插廣告區塊較少。</li>
                  <li>企業色區塊較多且重，會影響插圖。</li>
                </ol>
              </div>
              <div class="my-4">
                <h3 class="fs-5">解決方式：</h3>
                <ol>
                  <li>將文章加入近期新增文章 5 篇，其中可安插廣告欄位。</li>
                  <li>右側歸類出瀏覽數較多的熱門文章，其中可安插廣告欄位。</li>
                  <li>弱化企業色，讓視覺集中在插圖。</li>
                </ol>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <div
              class="row justify-content-center align-items-start g-2 g-lg-4 py-3 py-lg-5"
            >
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/blog-1.jpg'),
                  }"
                  alt="舊部落格"
                  class="shadow rounded-lg w-100"
                />
              </div>
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/blog-2.jpg'),
                  }"
                  alt="部落格修正"
                  class="shadow rounded-lg w-100"
                />
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 原始部落格 VS.
              重新設計的部落格
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">・・・</div>
    <!-- 常見問題頁 -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <div class="">
            <h2 class="fs-3 mb-4">7. 常見問題頁</h2>
            <article class="lh-1d8">
              <p>所有問題都集中在一起，沒有特別切分出來。</p>
              <div class="my-4">
                <h3 class="fs-5">痛點：</h3>
                <ol>
                  <li>展開後會難以辨別目前在哪一主項目。</li>
                  <li>手機版將會導致頁面過長。</li>
                </ol>
              </div>
              <div class="my-4">
                <h3 class="fs-5">解決方式：</h3>
                <ol>
                  <li>將主項目以圖形化區分，能清楚知道目前所在項目分類。</li>
                  <li>
                    點擊主項目進入才會顯示項目的子問題，解決手機上瀏覽不易。
                  </li>
                  <li>將相同的題型歸至於同一項目的子問題。</li>
                </ol>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <div
              class="row justify-content-center align-items-center g-2 g-lg-4 py-3 py-lg-5"
            >
              <div class="col-5">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/QA-1.jpg'),
                  }"
                  alt="舊常見問題頁"
                  class="shadow rounded-lg w-100"
                />
              </div>
              <div class="col-7">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/QA-2.jpg'),
                  }"
                  alt="常見問題頁修正"
                  class="shadow rounded-lg w-100"
                />
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 原始常見問題頁 VS.
              重新設計的常見問題頁
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">・・・</div>

    <div class="row mt-5 mb-3">
      <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <h2>Part 2－表單更新設計</h2>
      </div>
    </div>
    <!-- 選單列 -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <div class="">
            <h2 class="fs-3 mb-4">1. 選單列</h2>
            <article class="lh-1d8">
              <p>
                過往頁面中，公司列出全部上架的月嫂，無法篩選，頂多就是使用排序方式讓客戶瀏覽，用戶需個別點擊進入月嫂內頁查看。
              </p>
              <div class="my-4">
                <h3 class="fs-5">痛點：</h3>
                <ol>
                  <li>
                    登入按鈕不明確，使用者不易發現登入會員按鈕（登入後變會員中心）。
                  </li>
                  <li>加入購物車商品數量不易發現，使用者較不易清空。</li>
                  <li>
                    聯絡方式集中在 Footer，使用者必須要捲動到最下方才能發現。
                  </li>
                </ol>
              </div>
              <div class="my-4">
                <h3 class="fs-5">解決方式：</h3>
                <ol>
                  <li>將登入按鈕放回主選單上。</li>
                  <li>購物車商品以紅色 Badge 顯示。</li>
                  <li>選單上方放入聯繫客服方式。</li>
                </ol>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <div class="row g-2 g-lg-4 py-3 py-lg-5">
              <div>
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/nav-1.jpg'),
                  }"
                  alt="舊桌機版選單列"
                  class="shadow rounded-lg w-100"
                />
              </div>
              <div>
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/nav-2.jpg'),
                  }"
                  alt="桌機版選單列修正"
                  class="shadow rounded-lg w-100"
                />
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 桌機版 原始選單列 VS.
              重新設計的選單列
            </p>
            <div class="row py-3 py-lg-5">
              <div class="col-md-8 offset-md-2">
                <div
                  class="row justify-content-center align-items-start g-2 g-lg-4"
                >
                  <div class="col">
                    <img
                      v-lazy="{
                        src: require('@/assets/images/iaunty-redesign/nav-3.jpg'),
                      }"
                      alt="舊手機版選單列"
                      class="shadow rounded-lg w-100"
                    />
                  </div>
                  <div class="col">
                    <img
                      v-lazy="{
                        src: require('@/assets/images/iaunty-redesign/nav-4.jpg'),
                      }"
                      alt="手機版選單列修正"
                      class="shadow rounded-lg w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 手機版 原始選單列 VS.
              重新設計的選單列
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">・・・</div>
    <!-- 登入頁 -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <div class="">
            <h2 class="fs-3 mb-4">2. 登入頁</h2>
            <article class="lh-1d8">
              <div class="my-4">
                <h3 class="fs-5">痛點：</h3>
                <ol>
                  <li>因有訪客式登入，導致減少了使用者加入會員意願。</li>
                  <li>加入的會員很容易忘記自己登入帳密。</li>
                </ol>
              </div>
              <div class="my-4">
                <h3 class="fs-5">解決方式：</h3>
                <ol>
                  <li>取消訪客式登入。</li>
                  <li>
                    建議使用者使用常用的社群帳號快速登入，不用再填寫麻煩的註冊資料。
                  </li>
                </ol>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <div
              class="row justify-content-center align-items-center g-2 g-lg-4 py-3 py-lg-5"
            >
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/login-1.jpg'),
                  }"
                  alt="舊登入頁"
                  class="shadow rounded-lg w-100"
                />
              </div>
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/login-2.jpg'),
                  }"
                  alt="登入頁修正"
                  class="shadow rounded-lg w-100"
                />
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 原始登入頁 VS.
              重新設計的登入頁
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">・・・</div>
    <!-- Footer頁 -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <div class="">
            <h2 class="fs-3 mb-4">3. Footer 頁</h2>
            <article class="lh-1d8">
              <div class="my-4">
                <h3 class="fs-5">痛點：</h3>
                <ol>
                  <li>
                    Footer的聯絡我們表單較少使用者會填寫，且曾受過駭客攻擊。
                  </li>
                  <li>許多客戶說找不到服務滿意者問卷按鈕。</li>
                </ol>
              </div>
              <div class="my-4">
                <h3 class="fs-5">解決方式：</h3>
                <ol>
                  <li>
                    將聯絡我們表單移除，並在選單上還有常見問題裡露出，讓使用者可以輕鬆找到我們。
                  </li>
                  <li>
                    因色系接近又在最底層，使用者不易發現，固將下方整列選單都併入
                    Footer 分類選項裡。
                  </li>
                </ol>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <div
              class="row justify-content-center align-items-center g-2 g-lg-4 py-3 py-lg-5"
            >
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/footer-1.jpg'),
                  }"
                  alt="舊Footer頁"
                  class="shadow rounded-lg w-100"
                />
              </div>
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/footer-2.jpg'),
                  }"
                  alt="Footer頁修正"
                  class="shadow rounded-lg w-100"
                />
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 原始 Footer 頁 VS.
              重新設計的 Footer 頁
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">・・・</div>
    <!-- 會員中心選單 -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <div class="">
            <h2 class="fs-3 mb-4">4. 會員中心選單</h2>
            <article class="lh-1d8">
              <div class="my-4">
                <h3 class="fs-5">痛點：</h3>
                <ol>
                  <li>會員中心選單項目不定期增減，選單過長，維護不易。</li>
                  <li>服務提供者選單跟會員選單放一起，手機版易混淆。</li>
                  <li>會員反映除了填寫我的評價外，無其他客訴管道。</li>
                </ol>
              </div>
              <div class="my-4">
                <h3 class="fs-5">解決方式：</h3>
                <ol>
                  <li>
                    將選單項目變為區塊排列，樣式和常見問題一致，也不用擔心選單過多問題。
                  </li>
                  <li>分開會員及服務提供者選單項目，各自為獨立頁面。</li>
                  <li>新增客訴頁面。</li>
                </ol>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <div
              class="row justify-content-center align-items-center g-2 g-lg-4 py-3 py-lg-5"
            >
              <div class="col-4">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/member-1.jpg'),
                  }"
                  alt="舊會員中心選單"
                  class="shadow rounded-lg w-100"
                />
              </div>
              <div class="col-8">
                <div class="row g-2 g-lg-4">
                  <div>
                    <img
                      v-lazy="{
                        src: require('@/assets/images/iaunty-redesign/member-2.jpg'),
                      }"
                      alt="會員中心選單修正"
                      class="shadow rounded-lg w-100"
                    />
                    <p class="fs-7 text-secondary mt-3 d-none d-md-block">
                      <i class="fas fa-caret-up me-2"></i>愛月嫂 會員中心選單
                    </p>
                  </div>
                  <div>
                    <img
                      v-lazy="{
                        src: require('@/assets/images/iaunty-redesign/member-3.jpg'),
                      }"
                      alt="服務提供者中心選單修正"
                      class="shadow rounded-lg w-100"
                    />
                    <p class="fs-7 text-secondary mt-3 d-none d-md-block">
                      <i class="fas fa-caret-up me-2"></i>愛月嫂
                      服務提供者中心選單
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 原始會員中心選單 VS.
              重新設計的會員中心選單
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">・・・</div>
    <!-- 需求表單頁 -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <div class="">
            <h2 class="fs-3 mb-4">5. 需求表單頁</h2>
            <article class="lh-1d8">
              <div class="my-4">
                <h3 class="fs-5">痛點：</h3>
                <ol>
                  <li>表單樣式較老舊。</li>
                  <li>無法指定服務人員，需特別註明。</li>
                  <li>無法選擇所需要的服務，需來電洽詢，較無彈性。</li>
                </ol>
              </div>
              <div class="my-4">
                <h3 class="fs-5">解決方式：</h3>
                <ol>
                  <li>將色系改為較清爽的風格，並加入小互動及插圖。</li>
                  <li>
                    從服務者個人頁面進入預訂，服務人員將指定為選定的服務提供者。
                  </li>
                  <li>
                    服務項目改為下拉式選項，服務不同則所填寫的表單格式不同。
                  </li>
                </ol>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <div
              class="row justify-content-center align-items-start g-2 g-lg-4 py-3 py-lg-5"
            >
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/form-1.jpg'),
                  }"
                  alt="舊需求表單頁"
                  class="shadow rounded-lg w-100"
                />
              </div>
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/form-2.jpg'),
                  }"
                  alt="需求表單頁修正"
                  class="shadow rounded-lg w-100"
                />
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 原始需求表單頁 VS.
              重新設計的需求表單頁
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">・・・</div>
    <!-- 會員資料頁 -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <div class="">
            <h2 class="fs-3 mb-4">6. 會員資料頁</h2>
            <article class="lh-1d8">
              <div class="my-4">
                <h3 class="fs-5">痛點：</h3>
                <ol>
                  <li>地址、頭像等會員資料分散在別處。</li>
                  <li>無需知道會員公司名稱。</li>
                </ol>
              </div>
              <div class="my-4">
                <h3 class="fs-5">解決方式：</h3>
                <ol>
                  <li>將資料整合在一處，並只加入必填項目。</li>
                  <li>拿掉公司名稱。</li>
                </ol>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <div
              class="row justify-content-center align-items-center g-2 g-lg-4 py-3 py-lg-5"
            >
              <div class="col-5">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/data-1.jpg'),
                  }"
                  alt="舊會員資料頁"
                  class="shadow rounded-lg w-100"
                />
              </div>
              <div class="col-7">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/data-2.jpg'),
                  }"
                  alt="會員資料頁修正"
                  class="shadow rounded-lg w-100"
                />
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 原始會員資料頁 VS.
              重新設計的會員資料頁
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">・・・</div>
    <!-- 服務提供者資料頁 -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <div class="">
            <h2 class="fs-3 mb-4">7. 服務提供者資料頁</h2>
            <article class="lh-1d8">
              <div class="my-4">
                <h3 class="fs-5">痛點：</h3>
                <ol>
                  <li>線上填寫資料太多。</li>
                  <li>不知道現在等級。</li>
                </ol>
              </div>
              <div class="my-4">
                <h3 class="fs-5">解決方式：</h3>
                <ol>
                  <li>將證照資料等拆開填寫。</li>
                  <li>審核通過後依經驗及能力在上方顯示級別。</li>
                </ol>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <div
              class="row justify-content-center align-items-center g-2 g-lg-4 py-3 py-lg-5"
            >
              <div class="col-5">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/worker-1.jpg'),
                  }"
                  alt="舊服務提供者資料頁"
                  class="shadow rounded-lg w-100"
                />
              </div>
              <div class="col-7">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/worker-2.jpg'),
                  }"
                  alt="服務提供者資料頁修正"
                  class="shadow rounded-lg w-100"
                />
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 原始服務提供者資料頁
              VS. 重新設計的服務提供者資料頁
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">・・・</div>

    <div class="row mt-5 mb-3">
      <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <h2>Part 3－活動合作頁設計</h2>
      </div>
    </div>
    <!-- 送機票活動 -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 class="fs-3 mb-4">1. 送來回機票活動</h2>
          <article class="lh-1d8">
            <p>
              為獎勵辛苦的服務者，以及吸引更多優秀的服務提供者，訂出做滿服務天數及送來回機票活動。
            </p>
            <p class="text-secondary">上線時間：2018/1/1 - 2019/12/31</p>
            <div class="my-4">
              <h3 class="fs-5">設計概念：</h3>
              <ul>
                <li>
                  主視覺以地區意象作為基底，因亞洲區故將地點使用書法字體呈現做為視覺焦點。
                </li>
                <li>首爾的爾字改變為站在入口處歡迎的感覺。</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center py-3 py-lg-5">
            <div
              class="row justify-content-center align-items-center g-2 g-lg-4 py-3"
            >
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/activite-3.jpg'),
                  }"
                  alt="送機票活動"
                  class="shadow rounded-lg w-100"
                />
              </div>
              <div class="col">
                <div
                  class="row justify-content-center align-items-start g-2 g-lg-4"
                >
                  <div class="">
                    <img
                      v-lazy="{
                        src: require('@/assets/images/iaunty-redesign/activite-1.jpg'),
                      }"
                      alt="韓國"
                      class="shadow rounded-lg w-100"
                    />
                    <p class="fs-7 text-secondary mt-3 d-none d-md-block">
                      <i class="fas fa-caret-up me-2"></i>2019 韓國
                    </p>
                  </div>
                  <div class="">
                    <img
                      v-lazy="{
                        src: require('@/assets/images/iaunty-redesign/activite-2.jpg'),
                      }"
                      alt="日本"
                      class="shadow rounded-lg w-100"
                    />
                    <p class="fs-7 text-secondary mt-3 d-none d-md-block">
                      <i class="fas fa-caret-up me-2"></i>2018 日本
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <div class="py-3">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/activite-6.jpg'),
                  }"
                  alt="新手活動步驟"
                  class="shadow rounded-lg w-100"
                />
              </div>
            </div>
            <div
              class="row justify-content-center align-items-center g-2 g-lg-4 py-3"
            >
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/activite-4.png'),
                  }"
                  alt="日本"
                  class="rounded-lg w-100"
                />
              </div>
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/activite-5.png'),
                  }"
                  alt="韓國"
                  class="rounded-lg w-100"
                />
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 送機票活動
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">・・・</div>
    <!-- 送購物金活動 -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 class="fs-3 mb-4">2. 送購物金活動</h2>
          <article class="lh-1d8">
            <p>
              為吸引用戶加入官方 Line 帳號，並和 Line Bot
              互動，推出答題送購物金活動。
            </p>
            <p class="text-secondary">上線時間：2018/5/20 - 26</p>
            <div class="my-4">
              <h3 class="fs-5">設計概念：</h3>
              <ul>
                <li>因推出 Line 機器人，主視覺使用AI的科技感。</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <div
              class="row justify-content-center align-items-center g-2 g-lg-4 py-3 py-lg-5"
            >
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/money-1.jpg'),
                  }"
                  alt="AI 主視覺"
                  class="shadow rounded-lg w-100"
                />
              </div>
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/money-2.jpg'),
                  }"
                  alt="送購物金活動"
                  class="shadow rounded-lg w-100"
                />
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 送購物金活動
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">・・・</div>
    <!-- 坐月子知識活動 -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 class="fs-3 mb-4">3. 坐月子知識活動</h2>
          <article class="lh-1d8">
            <p>
              為讓用戶認知坐月子需有專業知識，在農曆年期間推出答題送購物金活動。
            </p>
            <p class="text-secondary">上線時間：2018/2/15 - 20</p>
            <div class="my-4">
              <h3 class="fs-5">設計概念：</h3>
              <ul>
                <li>
                  因在農曆年節期間推出，主視覺使用紅金配色來搶紅包的概念。
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <div
              class="row justify-content-center align-items-center g-2 g-lg-4 py-3 py-lg-5"
            >
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/test-1.jpg'),
                  }"
                  alt="坐月子知識活動"
                  class="shadow rounded-lg w-100"
                />
              </div>
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/test-2.png'),
                  }"
                  alt="紅包 主視覺"
                  class="rounded-lg w-100"
                />
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 坐月子知識活動
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">・・・</div>
    <!-- 和紫金堂合作 -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 class="fs-3 mb-4">4. 和紫金堂合作</h2>
          <article class="lh-1d8">
            <p>推廣紫金堂月子餐料理包商品。</p>
            <p class="text-secondary">上線時間：2018/2/21 - 2020/6/20</p>
            <div class="my-4">
              <h3 class="fs-5">設計概念：</h3>
              <ul>
                <li>
                  直接展示料理後成品，運用簡便料理方法和食材，吸引消費者直接購買。
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <div
              class="row justify-content-center align-items-center g-2 g-lg-4 py-3 py-lg-5"
            >
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/cook-1.jpg'),
                  }"
                  alt="湯底"
                  class="shadow rounded-lg w-100"
                />
              </div>
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/cook-2.jpg'),
                  }"
                  alt="製作方法"
                  class="shadow rounded-lg w-100"
                />
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 和紫金堂合作
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">・・・</div>
    <!-- 和泌乳業者合作 -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 class="fs-3 mb-4">5. 和泌乳業者合作</h2>
          <article class="lh-1d8">
            <h3 class="fs-4">【宣媽媽哺育顧問團隊】</h3>
            <p>
              宣捷生物科技股份有限公司旗下的泌乳團隊，為增加曝光及通路，和愛月嫂合作的方案。
            </p>
            <p class="text-secondary">上線時間：2018/7/1 - 2018/12/31</p>
            <div class="my-4">
              <h3 class="fs-5">設計概念：</h3>
              <ul>
                <li>基底使用女性風格，主視覺即呈現泌乳插畫。</li>
                <li>用小圖示方式描繪宣媽媽主要的六大泌乳期間服務。</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center py-lg-5">
            <div class="row g-2 g-lg-4 py-3">
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/meri-1.jpg'),
                  }"
                  alt="宣捷合作頁面"
                  class="shadow rounded-lg w-100"
                />
              </div>
            </div>
            <div class="row g-2 g-lg-4 py-3">
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/meri-2.jpg'),
                  }"
                  alt="內容隱藏"
                  class="shadow rounded-lg w-100"
                />
              </div>
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/meri-3.jpg'),
                  }"
                  alt="內容開啟"
                  class="shadow rounded-lg w-100"
                />
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 與宣捷合作頁面
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">・・・</div>
    <!-- 與美體業者合作 -->
    <div class="py-5">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 class="fs-3 mb-4">6. 與美體業者合作</h2>
          <article class="lh-1d8">
            <p>
              產後身材的變形及心理壓力是許多孕媽的夢靨，愛月嫂和美體業者到府服務的異業結盟。
            </p>
            <p class="text-secondary">上線時間：有需求的孕媽都可預訂</p>
            <div class="my-4">
              <h3 class="fs-5">設計概念：</h3>
              <ul>
                <li>色彩以女性為主體，並以花瓣為背景呈現芳香感。</li>
                <li>使用icon呈現按摩的部位。</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <div class="row g-2 g-lg-4 py-3">
              <div class="col">
                <img
                  v-lazy="{
                    src: require('@/assets/images/iaunty-redesign/body-1.jpg'),
                  }"
                  alt="美體業者合作頁面"
                  class="shadow rounded-lg w-100"
                />
              </div>
            </div>
            <p class="fs-7 text-secondary">
              <i class="fas fa-caret-up me-2"></i>愛月嫂 與美體業者合作頁面
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mb-5 pb-5">・・・</div>
    <div class="text-center mb-5">
      <RouterLink to="/works/app1" class="text-decoration-none">
        <strong class="next-text">Next Project</strong>
        <p class="text-default">母嬰工具 App</p>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useToolIcons: [],
    };
  },
  methods: {
    getToolIcons() {
      fetch(`${process.env.VUE_APP_API}/toolIcons`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          this.useToolIcons = res.slice(0, 8);
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  mounted() {
    this.getToolIcons();
  },
};
</script>

<style lang="scss" scoped>
.next-text {
  font-size: 60px;
  color: #dee2e6;
  transition: 0.3s;
  &:hover {
    color: var(--bs-dark);
  }
}
</style>
