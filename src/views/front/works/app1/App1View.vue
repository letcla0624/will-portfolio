<template>
  <div class="container-flued">
    <div class="mbtool-bg py-3">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="text-dark">
              <h1 class="display-4 fw-bold">母嬰工具 App</h1>
              <p class="fs-5 mt-3">
                這是一套紀錄寶寶成長工具並結合母嬰用品的電商
                app，希望能在紀錄寶寶成長的過程時，也能讓相關使用者購買母嬰商品。
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="">
              <img
                src="@/assets/images/mbTool/bg-phone.png"
                alt="MBTool"
                class="position-relative w-100"
                style="z-index: 2"
              />
            </div>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100px"
        class="position-absolute bottom-0 w-100 svg-bottom"
        viewBox="0 0 1280 140"
        preserveAspectRatio="none"
        fill="#fff"
      >
        <g>
          <path
            d="M1280 3.4C1050.59 18 1019.4 84.89 734.42 84.89c-320 0-320-84.3-640-84.3C59.4.59 28.2 1.6 0 3.4V140h1280z"
            fill-opacity=".3"
          />
          <path
            d="M0 24.31c43.46-5.69 94.56-9.25 158.42-9.25 320 0 320 89.24 640 89.24 256.13 0 307.28-57.16 481.58-80V140H0z"
            fill-opacity=".5"
          />
          <path
            d="M1280 51.76c-201 12.49-242.43 53.4-513.58 53.4-320 0-320-57-640-57-48.85.01-90.21 1.35-126.42 3.6V140h1280z"
          />
        </g>
      </svg>
    </div>
  </div>

  <div class="container py-5">
    <div class="row">
      <div class="col-lg-10 offset-lg-1">
        <div class="mb-5">
          <h5 class="mb-4">使用工具</h5>
          <ul class="ps-0 clearfix">
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
        <div class="text-center">・・・</div>
        <div class="lh-lg pt-5">
          <h2>項目簡介</h2>
          <h3 class="mt-5">問題</h3>
          <p>
            傳統紀錄母嬰狀況是以紙本方式，雖然方便迅速，但易弄丟寶貴的數據資料，也很難統整數據，就醫時也容易忘記攜帶。
          </p>
          <br />
          <ol class="ps-3">
            <li class="mb-5">
              <h4>目標</h4>
              <p>
                因應月嫂反應，媽媽們都有各自好幾個的紀錄寶寶的軟體，每次去新服務就要學習使用新
                app，希望公司能開發一套母嬰工具
                app，能讓她們方便使用，並在當月嫂結束工作後，媽媽們還是會持續使用。
              </p>
              <div class="row">
                <div class="col-sm-4 text-center py-3">
                  <svg
                    class="rounded-circle"
                    width="160"
                    height="160"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="100%" height="100%" fill="#8e2de2"></rect>
                    <text
                      class="fs-3"
                      x="50%"
                      y="50%"
                      fill="#fff"
                      dx="-1em"
                      dy=".3em"
                    >
                      簡單
                    </text>
                  </svg>
                  <p class="fs-7 text-secondary mt-3">
                    做一個方便紀錄的數據的工具，並推銷商品。
                  </p>
                </div>
                <div class="col-sm-4 text-center py-3">
                  <svg
                    class="rounded-circle"
                    width="160"
                    height="160"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="100%" height="100%" fill="#FF9B05"></rect>
                    <text
                      class="fs-3"
                      x="50%"
                      y="50%"
                      fill="#fff"
                      dx="-1em"
                      dy=".3em"
                    >
                      實用
                    </text>
                  </svg>
                  <p class="fs-7 text-secondary mt-3">
                    將寶寶大部分需紀錄的項目囊括在裡面。
                  </p>
                </div>
                <div class="col-sm-4 text-center py-3">
                  <svg
                    class="rounded-circle"
                    width="160"
                    height="160"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="100%" height="100%" fill="#ff8a98"></rect>
                    <text
                      class="fs-3"
                      x="50%"
                      y="50%"
                      fill="#fff"
                      dx="-1em"
                      dy=".3em"
                    >
                      精準
                    </text>
                  </svg>
                  <p class="fs-7 text-secondary mt-3">
                    備註、數據分析圖表化，以利就醫時診斷。
                  </p>
                </div>
              </div>
            </li>
            <li class="mb-5">
              <h4>核心功能</h4>
              <div class="row">
                <div class="col-md-4 py-3">
                  <div class="position-relative card bg-light border-0 p-4">
                    <div
                      class="position-absolute cube border border-default border-3 border-end-0 border-bottom-0"
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title">詳細備註</h5>
                      <div class="rect-splid mb-4"></div>
                      <p class="card-text fs-7 text-secondary">
                        在感覺寶寶狀況改變時，能詳細備註吃、喝或哪些生活習慣改變，以利後續問題診斷。
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 py-3">
                  <div class="position-relative card bg-light border-0 p-4">
                    <div
                      class="position-absolute cube border border-default border-3 border-end-0 border-bottom-0"
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title">數據分析</h5>
                      <div class="rect-splid mb-4"></div>
                      <p class="card-text fs-7 text-secondary">
                        透過每天的紀錄，能精準將寶寶習慣顯示於圖表，快速知道寶寶身體狀況是否產生問題。
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 py-3">
                  <div class="position-relative card bg-light border-0 p-4">
                    <div
                      class="position-absolute cube border border-default border-3 border-end-0 border-bottom-0"
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title">需求推薦</h5>
                      <div class="rect-splid mb-4"></div>
                      <p class="card-text fs-7 text-secondary">
                        相關紀錄的下會推薦相對應的商品，隨時曝光，當需要該商品時，以利用戶直接購買。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="mb-5">
              <h4>用戶分析</h4>
              <div class="col-xl-8 offset-xl-2">
                <div class="row row-cols-1 row-cols-sm-2 g-3 text-center">
                  <div class="col">
                    <div id="ageChart"></div>
                  </div>
                  <div class="col">
                    <div id="genderChart"></div>
                  </div>
                </div>
              </div>
            </li>
            <li class="mb-5">
              <h4>挑戰</h4>
              <p>
                結合諸多母嬰工具的項目並整合電商，並且能讓各年齡層都易上手且黏著度高。
              </p>
            </li>
            <li class="mb-5">
              <h4>我的角色</h4>
              <p>
                作為主要的 UX / UI 設計師，
                我參與了項目的所有階段，包括用戶研究、構想、用戶故事、使用者旅程、草圖繪製、線框、視覺設計、原型設計等，從使用者研究到交付最終設計。
              </p>
            </li>
            <li class="mb-5">
              <h4>製作</h4>
              <ul>
                <li class="list-circle">Persona</li>
                <li class="list-circle">Flow Chart</li>
                <li class="list-circle">Wireframe</li>
                <li class="list-circle">UI Design</li>
                <li class="list-circle">Prototype</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>

  <div class="jumbotron bg-light-yellow">
    <div class="container">
      <div class="row">
        <div class="text-center">
          <strong class="display-4 fw-bold text-uppercase ls-lg text-dark">
            DESIGN PROCESS
          </strong>
        </div>
      </div>
    </div>
  </div>

  <div class="container lh-lg py-5" style="margin-bottom: 10rem">
    <!-- Process -->
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 py-5 pt-3">
      <div class="col">
        <div class="card process text-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mx-auto"
            x="0px"
            y="0px"
            viewBox="0 0 511.2 511.2"
            xml:space="preserve"
          >
            <path
              d="M463.6,57.5C401.4-10,296.4-19.4,224.3,36.3c-38.4,29.7-62.1,68.5-68.9,116.6c-7.5,52.7,6.2,100,40.1,141.5
                c-11.5,11.4-22.7,22.7-34.1,33.9c-0.9,0.9-3.1,1.3-4.2,0.9c-22.4-8.9-41.4-3.8-58.1,13.1c-24.9,25.2-49.9,50.3-75.2,75.1
                C13.1,428,3.1,438.8,0,454.3v15c0.8,2.7,1.4,5.4,2.3,8.1c6.3,17.4,18.4,28.3,36.4,32.8c1.1,0.3,2.2,0.7,3.2,1.1h15
                c10.1-2.8,19.7-6.7,27.3-14.4c29.2-29.3,58.8-58.4,87.7-88c15-15.4,18.2-33.8,10.4-53.8c-1.2-3-0.5-4.4,1.5-6.4
                c10.2-10,20.3-20.2,30.4-30.3c0.9-0.9,1.9-1.7,2.8-2.4c75.7,62.9,184.3,52.8,247.4-16.3C527.1,230.9,526.8,126,463.6,57.5z
                M152.3,385.7c-1.1,1.6-2.6,3-4,4.4c-27.9,27.9-55.8,55.7-83.6,83.6c-5.6,5.6-11.9,8.9-20.1,6.7c-13.5-3.5-19-19-10.6-30.1
                c1-1.3,2.2-2.5,3.3-3.7c28.1-28.1,56.2-56.2,84.3-84.3c4.3-4.3,9-7.4,13.4-7.2c9.6,0.1,15.5,3.5,18.9,10.3
                C157.4,372.4,156.8,379.3,152.3,385.7z M332,327.6c-82,0-148.4-66.7-148.3-148.9c0.1-82,66.9-148.7,148.8-148.6
                c82,0.1,148.7,66.9,148.7,148.8C481.2,261.1,414.4,327.7,332,327.6z M420.8,111.6c-2-7.5-9-12.4-16.4-11.5
                c-7.5,0.9-13.1,7-13.1,15.1c-0.1,21.3,0,42.6,0,63.8h0c0,20.4,0,40.9,0,61.3c0,2.5,0.1,5,0.8,7.3c2.3,7.2,9.3,11.2,16.9,9.9
                c6.9-1.2,12.2-7.4,12.2-14.9c0.1-42.6,0-85.1,0-127.7C421.2,113.9,421.1,112.7,420.8,111.6z M306.2,130c-8.8,0.1-14.7,6.7-14.8,16.5
                c-0.1,15.8,0,31.6,0,47.4c0,15.8,0,31.6,0,47.4c0,10.1,6,16.6,15.1,16.5c8.8-0.1,14.8-6.6,14.9-16.4c0-31.6,0-63.2,0-94.7
                C321.4,136.6,315.2,129.9,306.2,130z M356.1,149.9c-8.8,0.1-14.8,6.6-14.8,16.5c-0.1,12.3,0,24.6,0,36.9c0,12.8-0.1,25.6,0,38.4
                c0.1,9.7,6.2,16.1,15.1,16.1c8.9-0.1,14.9-6.6,14.9-16.4c0-24.9,0-49.9,0-74.8C371.3,156.6,365.1,149.8,356.1,149.9z M256.3,179.9
                c-8.4,0.1-14.6,6.5-14.8,15.5c-0.1,7.8,0,15.6,0,23.4c0,8-0.1,15.9,0,23.9c0.2,8.9,6.5,15.1,15.1,15.1c8.5-0.1,14.8-6.5,14.9-15.4
                c0.1-15.6,0.1-31.2,0-46.8C271.4,186.4,264.9,179.8,256.3,179.9z"
            />
          </svg>
          <div class="card-body">
            <h5 class="card-title">研究</h5>
            <p class="card-text fs-7 lh-1d5">用戶洞察力分析並了解痛點。</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card process text-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mx-auto"
            x="0px"
            y="0px"
            viewBox="0 0 511.2 511.2"
            xml:space="preserve"
          >
            <path
              d="M296.4,10.5c-8.6-2.3-17.4-3.3-26.2-4.9H241c-1.2,0.3-2.5,0.7-3.7,0.9c-10,1.9-20.3,3-30.1,5.7C116,37,61,133.7,85.4,225.7
                c7.4,27.9,21.1,52.2,39.9,73.9c16.3,18.9,25.7,40.9,27.2,65.9c0.8,12.5,0.2,25,0.7,37.5c0.7,18.2,9.6,31.3,26,39.1
                c3,1.4,4.4,3.1,5.2,6.2c7.2,28.1,24.9,46.4,52.6,55c3.2,1,6.6,1.6,9.8,2.4h17.6c0.6-0.3,1.1-0.7,1.7-0.8c31.1-5.5,53.7-26.7,61-57
                c0.5-2.1,2.6-4.4,4.6-5.4c16.8-8.1,25.8-21.3,26.4-40c0.3-9.3-0.6-18.6,0.2-27.8c1.1-11.6,2.5-23.3,5.4-34.5
                c4.6-17.6,15.2-32.1,26.5-46.1c38.1-47,50.9-100.4,34.8-158.6C406.8,69.5,362.6,28.1,296.4,10.5z M256.6,476.1
                c-19.8,0.6-36.6-13.4-41.8-30h81.3C293,461.6,275.1,475.6,256.6,476.1z M328.5,403.7c-1,8.4-7.2,13-16.6,13c-27.2,0-54.3,0-81.5,0
                c-10.4,0-20.8,0-31.2,0c-10.9-0.1-16.7-6-16.8-17c0-3.9,0-7.8,0-12.1h146.3C328.7,393.1,329.2,398.5,328.5,403.7z M364.9,278.6
                c-16.8,19.9-28.3,42.2-33.5,67.8c-0.7,3.7-1.2,7.4-1.9,11.5H181.7c-2.2-16.7-6.7-32.4-14.1-47.4c-6.4-13.1-15.1-24.6-24.4-35.7
                c-64.3-77.3-34.1-194.6,60.1-230.2c48.3-18.2,94.7-11.7,137.1,17.8c30.5,21.2,49.9,50.5,57.8,86.7
                C408.8,197.7,396.8,240.9,364.9,278.6z M487,181.3c-8.3,0.5-16.6,0.1-24.8,0.1c-8.7,0.1-15,6.1-15.1,14.4
                c-0.1,8.6,6.2,14.8,15.1,14.9c8.3,0.1,16.6-0.4,24.8,0.1c8.9,0.5,15-2.8,18.6-10.8v-7.8C502,184,495.9,180.8,487,181.3z M34.3,128.4
                c6.6,6.4,15.4,6.5,21.3,0.5c6-6,5.9-14.7-0.5-21.3c-6.4-6.7-12.9-13.4-19.7-19.6c-2.9-2.6-6.8-4-8.9-5.2c-7.9,0.7-12.7,3.3-15.3,9
                c-2.8,6.2-1.4,11.8,3.2,16.6C20.8,115.2,27.5,121.8,34.3,128.4z M51.3,260.2c-6-2.7-11.6-1.6-16.2,2.8c-6.9,6.6-13.7,13.4-20.4,20.3
                c-6.4,6.6-6.5,15.3-0.5,21.3c5.9,6,14.7,5.9,21.3-0.5c6.7-6.4,13.4-12.9,19.6-19.7c2.6-2.9,4-6.8,5.3-9.1
                C59.6,267.6,57,262.8,51.3,260.2z M50.1,181.4c-10.1-0.1-20.1-0.1-30.2,0c-8,0.1-14.1,6.4-14.2,14.3c-0.1,8.2,6,14.7,14.1,14.9
                c5,0.1,10.1,0,15.1,0c5,0,10.1,0.1,15.1,0c8.2-0.2,14.3-6.6,14.2-14.8C64.1,187.9,58,181.6,50.1,181.4z M467.1,133.4
                c1.8-0.7,5.2-1.2,7.3-3.1c8.3-7.8,16.5-15.6,24.1-24.1c4.9-5.5,3.7-13.9-1.6-19c-5.3-5.1-13.5-6-19.1-1c-8.2,7.4-16,15.3-23.4,23.4
                c-4,4.4-4.3,10-1.5,15.5C455.6,130.4,460.1,132.8,467.1,133.4z M475.5,262.5c-5.7-5.3-13.9-4.9-19.5,0.2c-5.7,5.3-6.9,13.9-1.6,19.7
                c7.4,8.2,15.3,16,23.4,23.4c4.4,4,10.1,4.2,15.5,1.4c5.3-2.7,7.6-7.3,8.3-14.5c-1-2-1.9-5.7-4.1-8.2
                C490.5,277,483.1,269.6,475.5,262.5z M182.6,173.4c-8.6-0.1-14.8,6.2-14.9,15.1c0,2.8,0,13.6,0,16.3c0.1,8.7,6.1,15,14.4,15.1
                c8.6,0.1,14.8-6.2,14.9-15.1c0-2.8,0-13.6,0-16.3C196.9,179.8,190.9,173.5,182.6,173.4z M329.1,173.4c-8.6-0.1-14.8,6.2-14.9,15.1
                c0,2.8,0,13.6,0,16.3c0.1,8.7,6.1,15,14.4,15.1c8.6,0.1,14.8-6.2,14.9-15.1c0-2.8,0-13.6,0-16.3
                C343.4,179.8,337.4,173.5,329.1,173.4z M300.1,231.1c-6.3-4.1-14.8-2.3-18.9,4c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.1,0-0.1,0.1-0.1
                c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1l-0.1,0.2c-0.2,0.3-0.4,0.6-0.7,0.9c-0.2,0.3-0.6,0.7-1,1
                c-0.4,0.4-0.8,0.7-1.2,1.1c-1.7,1.4-3.9,2.7-6.4,3.7c-4.9,2.2-10.7,3.6-16.7,4.3c-6.1,0.7-12.2,0.9-17.9,0c-1.5-0.2-2.8-0.5-4.2-0.9
                l-2-0.6c-0.7-0.2-1.3-0.5-2-0.7c-0.6-0.3-1.2-0.6-1.9-0.8c-0.6-0.3-1.2-0.6-1.7-1c-0.3-0.2-0.6-0.3-0.8-0.5l-0.8-0.6
                c-0.2-0.2-0.5-0.4-0.7-0.6l-0.3-0.3l-0.1-0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c-1.4-2.4-4.4-3.3-6.8-1.9c-2.4,1.4-3.3,4.4-1.9,6.8
                l0.3,0.6l0.3,0.4l0.5,0.7c0.3,0.5,0.7,0.9,1,1.4l1,1.2c0.4,0.4,0.7,0.8,1.1,1.1c0.7,0.8,1.5,1.4,2.3,2.1c0.8,0.6,1.6,1.3,2.4,1.8
                c0.8,0.5,1.7,1.1,2.5,1.6l2.6,1.5c1.7,0.8,3.5,1.7,5.3,2.4c7.2,2.8,14.6,4.2,22,4.9c7.4,0.7,15.1,0.6,23.1-0.9c4-0.8,8.1-2,12.3-3.9
                c1-0.5,2.1-1,3.1-1.6c1-0.6,2.1-1.2,3.1-1.9c1-0.7,2.1-1.5,3.1-2.4l0.8-0.7c0.3-0.2,0.5-0.5,0.8-0.8c0.3-0.3,0.5-0.6,0.9-0.9
                l0.5-0.6l0.3-0.3l0.5-0.6C308.2,243.7,306.4,235.2,300.1,231.1z"
            />
          </svg>
          <div class="card-body">
            <h5 class="card-title">發想</h5>
            <p class="card-text fs-7 lh-1d5">收集想法、草稿和用戶流程。</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card process text-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mx-auto"
            x="0px"
            y="0px"
            viewBox="0 0 511.2 511.2"
            xml:space="preserve"
          >
            <path
              d="M181.4,5.6c49,0,98,0,146.9,0c-0.3,0.6-0.7,1.1-0.8,1.7c-10.9,36.6-21.9,73.1-32.4,109.7c-1.9,6.6-1.2,14-1.7,21.4
                c11.9,0,22.6,0.1,33.4-0.1c1.5,0,3.2-1.4,4.3-2.6c14-15.7,27.9-31.5,41.9-47.2c2-2.3,2.6-4.2,1.9-7.4c-6-26.3,8.7-52.1,34.5-60.6
                c5.9-1.9,11.9-3.4,17.9-5c11.4-3,22.8-6,34.7-9.1c4.6,17.4,9.2,34.3,13.4,51.3c1.1,4.5,1.8,9.4,1.5,14c-1.5,23.3-14.9,40-37.3,47.4
                c-1.3,0.4-3,1.1-3.4,2.1c-2.1,5.5-3.9,11.2-5.9,17.1c3,0,34.8,0.2,37.1,0c20.4-1.6,38.5,13.1,38.4,38.2
                c-0.3,75.6-0.1,151.1-0.2,226.7c0,4.2-0.4,8.5-1.5,12.5c-4.3,15.9-17.2,25.5-33.9,25.5c-44.9,0.1-119.3,0-164.2,0
                c-1.9,0-3.8,0-5.9,0v35.3h14.2c8,0,14.5,6.5,14.5,14.4v0c0,8-6.5,14.4-14.5,14.4H196.5c-8,0-14.5-6.5-14.5-14.4v-0.3
                c0-8,6.5-14.4,14.5-14.4h14.1v-35c-2.4,0-4.3,0-6.2,0c-44.6,0-118.2,0-162.8,0c-8.3,0-15.7-2.1-22.3-7.2
                c-10-7.7-13.6-18.2-13.6-30.4c0-32.4,0-64.8,0-97.2c0-43.5,0-87,0-130.4c0-23.5,14.2-37.7,37.7-37.7c7.7,0,44.4,0,52.1,0
                c1.2,0,2.5-0.2,5-0.5c-1.3-7.9-1.9-15.5-3.8-22.8c-4-15-8.7-29.9-13.2-44.8c-6.5-21.6-13-43.2-19.6-64.8c22.2,0,44.4,0,66.6,0
                c7.5,1.9,15.3,3.1,22.5,5.7c9.7,3.6,18.9,8.3,28.5,12.6V5.6z M475.6,373.2c-127.5,0-312.8,0-440.1,0c0,9.9,0,19.7,0,29.4
                c0,8.9,0.6,9.5,9.3,9.5c120.9,0,300.4,0,421.3,0c1.6,0,3.6,0.5,4.8-0.2c1.8-1.1,4.4-3.1,4.4-4.8C475.8,396,475.6,384.8,475.6,373.2z
                M100.3,167.8c-8.9,0-47.1,0-56.2,0c-7.6,0-8.6,1-8.6,8.3c0,54.1,0,108.1,0,162.2c0,1.7,0,3.4,0,5.1c29.6,0,87.5,0,116.4,0
                c0-47.2,0-94.2,0-141.1C118.8,199,110.4,193.4,100.3,167.8z M388.9,220.3c-23.8,41.1-47.4,81.9-71.2,123.1c43.2,0,115.1,0,158,0
                c0-2.2,0-4.1,0-6c0-37.9,0-75.9,0-113.8c0-16.3,0-32.6,0-48.8c0-5.5-1.5-6.9-7-7c-5.1-0.1-39.7,0.2-44.7-0.1
                c-3.1-0.2-4.2,1.1-5.1,3.9c-2,6.5-4.3,12.9-6.4,19.4c-4,11.8-8,23.5-12.1,35.6C396.4,224.4,392.8,222.5,388.9,220.3z M104.3,35.1
                c-0.1,0.7-0.2,1-0.1,1.3c6.4,21.6,13,43.2,19.2,64.9c0.9,3.1,2.7,3.1,5.1,3.1c45.1,0,90.1,0,135.2,0c3.1,0,4.5-0.8,5.4-4
                c4.3-15.1,8.9-30.2,13.4-45.3c2-6.6,3.9-13.2,5.9-19.9c-25.9,0-51.1,0-77,0c0,14.7,0,29.1,0,43.7c-7,0-13.3-0.3-19.7,0.1
                c-4.6,0.3-6.9-1.1-8.5-5.6c-1.7-4.7-4-9.5-7.2-13.1C156.8,38.6,131.7,33.6,104.3,35.1z M263.7,133.9c-45.1,0-89.6,0-133.9,0
                c-0.2,0.5-0.5,0.8-0.5,1.1c-0.1,7-0.2,14-0.1,21c0.1,11.2,5.6,16.7,16.9,16.8c13.2,0,26.4,0,39.6,0c20.6,0,41.1,0,61.7,0
                c9,0,15.8-4.8,16.2-12.3C264.1,151.7,263.7,142.9,263.7,133.9z M249.7,343.7c10.2,0,19.5-0.2,28.7,0.1c3.8,0.1,5.8-1.2,7.6-4.4
                c24.8-43.1,49.8-86.2,74.7-129.3c0.9-1.5,1.6-3.1,2.4-4.8c-8.5-4.9-16.6-9.5-25-14.4C308.6,241.9,279.4,292.3,249.7,343.7z
                M182.5,202.2c0,47.4,0,94.3,0,141.2c9.6,0,18.8,0,28.2,0c0-47.2,0-94.1,0-141.2C201.2,202.2,192,202.2,182.5,202.2z M241.3,202.4
                c0,32,0,63.7,0,96.8c24.2-41.8,47.6-82.3,71.1-123c-3.4-2-7-3.1-8.8-5.4c-3.3-4.2-7.1-2.9-10.9-2.7
                C283,193.2,274.1,199.1,241.3,202.4z M347.3,162.1c12.4,7.1,24.3,14,36.5,21c7.4-22,14.6-43.3,21.9-64.9c-4.4-2.5-8.6-4.9-13-7.4
                C377.6,127.8,362.7,144.6,347.3,162.1z M440.7,42.7c-7.7,2.1-15,3.8-22.1,6c-12,3.8-18.2,15.7-14.7,27.4c3.2,10.9,15.2,17.8,26.1,15
                c12-3,19.2-14.3,16.5-26.4C445,57.5,442.8,50.4,440.7,42.7z M269.6,441.7c-9.8,0-19,0-28.4,0c0,11.7,0,23.1,0,34.6
                c9.6,0,19,0,28.4,0C269.6,464.6,269.6,453.3,269.6,441.7z"
            />
          </svg>
          <div class="card-body">
            <h5 class="card-title">設計</h5>
            <p class="card-text fs-7 lh-1d5">打造品牌、信息和界面。</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card process text-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mx-auto"
            x="0px"
            y="0px"
            viewBox="0 0 511.2 511.2"
            xml:space="preserve"
          >
            <path
              d="M505.6,57.7c0-29.7-22.4-52.1-52.1-52.1c-19.1,0-38.2,0-57.3,0c-19.1,0-38.2,0-57.3,0c-14.5,0-27.7,5.3-37.3,14.8
                c-9.6,9.6-14.9,22.8-14.9,37.2c0,27.2,0,54.4,0,81.6l0,37.1c-1-0.1-1.9-0.1-2.9-0.1c-12.6,0-24.9,5.3-33.8,14.6
                c-9.4,9.8-14.3,22.8-13.7,36.8c0.7,19,0.5,38.4,0.3,57.2c-0.1,7-0.1,14.3-0.2,21.5c0,9.2-5,16.6-12.2,19c0,0,0-24.2,0-35.9
                c0-26.7,0-54.2,0-81.3c0-29.5-22.4-51.7-51.9-51.8c-18.4,0-36.8,0-55.2,0c-19.8,0-39.6,0-59.3,0c-30.3,0-52.3,22-52.3,52.4
                c0,81.5,0,163,0,244.6c0,30.3,22,52.4,52.3,52.4c17.6,0,35.2,0,52.8,0c20.2,0,40.5,0,60.7,0c14.9,0,28.4-5.3,38-14.8
                c9.6-9.6,14.9-23.1,14.9-38c0-22.4,0-44.8,0-67.1v-31.1c24.2-4.1,41.1-25,40.4-49.9c-0.5-17.8-0.4-36-0.3-53.6
                c0.1-7.6,0.1-15.4,0.1-23.1c0-15.7,7.3-23.4,22.3-23.4l0,30.8c0,22.5,0,45,0,67.5c0,14.4,5.3,27.6,14.9,37.2
                c9.6,9.6,22.8,14.8,37.3,14.8c19.1,0,38.2,0,57.3,0c19.1,0,38.2,0,57.3,0c29.7,0,52.1-22.4,52.1-52.1
                C505.6,222.8,505.6,140.3,505.6,57.7z M109.5,296.8c-1.4,0-2.9,0.1-4.3,0.2c-18.5,1.6-34.3,16-38.5,35c-4.8,22.3,8.3,44.3,30.4,51.3
                c4.2,1.3,8.5,2,12.9,2c17.8,0,34.1-11,40.6-27.5c1.1-2.7,1.6-2.9,4.2-2.9l0.4,0c5.7,0.1,38,0.1,40.9,0.1c0,0,0.1,99.5-0.3,102.7
                c-1.7,12-10.6,19.7-22.7,19.8c-21.5,0.1-41.1,0.2-59.8,0.2c-19.9,0-38.4-0.1-56.6-0.2c-13.1-0.1-22.8-9.9-23.1-23.4
                c0-2.3-0.1-237.7-0.1-237.7h0.1c-0.6-10.9,0.2-19.4,7.9-26.2c4.4-3.9,9.7-5.9,15.8-5.9c5.3,0,10.7,0,16,0v4.9
                c0,10.1,8.2,18.3,18.3,18.3h46.5c10.1,0,18.3-8.2,18.3-18.3v-4.9c5.6,0,11,0,16.3,0c12.4,0,21.5,8,23.2,20.4
                c0.4,3.2,0.3,6.6,0.2,10.2c0,0.5,0,112.2,0,112.2h-0.8c-3.7,0-36.2,0-41.7,0.1h-0.2c-1.5,0-1.5,0-2.1-1.6
                C144.6,307.8,128.6,296.8,109.5,296.8z M126.1,341c0,8.6-7.5,16.1-16.1,16.1h-0.2c-4.2-0.1-8.3-1.9-11.4-5.1
                c-3-3.1-4.7-7.2-4.6-11.3c0.2-8.6,7.6-15.9,16.1-15.9h0c4.1,0,8.2,1.8,11.3,4.9C124.4,332.8,126.1,337,126.1,341z M477,307
                c-1.7,12-10.6,19.8-22.7,19.8c-21.4,0.1-41,0.2-59.8,0.2c-19.9,0-38.4-0.1-56.6-0.2c-13.1-0.1-22.8-9.9-23.1-23.4
                c-0.1-2.7,0.2-98.6,0.2-98.6h63.4c-2.4,5.4-1.3,11.7,3.1,15.9c2.7,2.5,6.3,4,9.9,4c3.2,0,6.1-1.1,8.3-3.1c8-7.3,15.6-14.9,22.7-22.4
                c4.8-5.2,4.2-13.3-1.5-19.1c-5.6-5.6-12.1-12.1-19-18.7c-3.3-3.2-7.1-4.9-10.9-4.9c-3.3,0-6.5,1.3-9.2,3.8c-4.6,4.2-5.7,10.3-3.1,16
                h-63.5c0,0-0.5-112.4-0.5-113.3c0.4-5.2,0.8-10.1,2.1-14.6c2.5-8.5,11.3-14.5,21.3-14.5c5.6,0,11.1,0,16.4,0v4.9
                c0,10.1,8.2,18.3,18.3,18.3h46.5c10.1,0,18.3-8.2,18.3-18.3v-4.9c5.5,0,11,0,16.3,0.1c13,0,22.7,9.3,23.5,22.6
                C477.7,59,477.5,303.8,477,307z"
            />
          </svg>
          <div class="card-body">
            <h5 class="card-title">原型</h5>
            <p class="card-text fs-7 lh-1d5">獲取用戶反饋並進行迭代。</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Persona -->
    <div class="row align-items-center gx-4 py-5 my-5">
      <div class="col-lg-6 order-lg-5">
        <div class="">
          <h3 class="text-uppercase ls-lg">Persona</h3>
          <h4 class="my-3 text-secondary">
            依公司資料庫顯示，與公司有互動的 85% 用戶為女性。
          </h4>
          <p>
            開始這個項目時，我基於在線研究、月嫂及媽媽們的反饋了解，創建了三種用戶的角色。主要還是以媽媽人物為主軸，月嫂協助並教導客戶使用，畢竟此app最終目的是希望用戶長期紀錄寶寶之餘，還能購買所需要的商品。
          </p>
          <ul class="text-secondary">
            <li class="list-circle" v-for="item in persona" :key="item.id">
              <em>{{ item }}</em>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6 order-lg-1">
        <div class="mt-3">
          <img
            v-lazy="{ src: require('@/assets/images/mbTool/persona.png') }"
            alt="persona"
            class="w-100"
          />
        </div>
      </div>
    </div>
    <!-- Flow Chart -->
    <div class="row py-5 my-5">
      <div class="col-lg-8 offset-lg-2">
        <h3 class="text-uppercase ls-lg">Flow Chart</h3>
        <h4 class="my-3 text-secondary">
          在進行用戶界面設計之前，我確保完善了功能和用戶交互流程。
        </h4>
        <p>
          以下功能流程圖描述了應用程序的內容策略和用戶流程，列出了用戶可能與之交互的潛在功能，以了解如何簡化他們的旅程，幫助用戶使用該產品實現最重要的目標，並讓開發人員知道可能有哪些項目，而哪些可能需要模組化。
        </p>
        <a
          href="https://whimsical.com/flowchat-W2zyGEhsDC1YKBPwxUJeWC"
          class="text-default fw-bold text-decoration-underline"
          target="_blank"
        >
          <i class="bi bi-caret-right-fill me-1"></i>Whimsical Flow Chart 連結
        </a>
      </div>
      <div class="col-12">
        <div class="py-5">
          <img
            v-lazy="{ src: require('@/assets/images/mbTool/flow-chart.png') }"
            alt="Flow Chart"
            class="w-100 rounded-lg"
          />
        </div>
      </div>
    </div>
    <!-- Wireframes -->
    <div class="row align-items-center py-5">
      <div class="col-md-6">
        <div class="">
          <h3 class="text-uppercase ls-lg">Wireframes</h3>
          <h4 class="my-3 text-secondary">
            在設計過程的開始，我創建了用於測試目的的線框。
          </h4>
          <p>
            為了敏捷開發，使用了figma製作了低保真的線框稿，快速將畫面展現給開發人員觀看，讓他們更確定有哪些功能要開發，並對照
            Flow Chart 看是否有哪些頁面有缺失或需要製作更精確的畫面。
          </p>
          <a
            href="https://www.figma.com/file/EXJyosCNspCNBYcXcUl6Qv/MBTool-Wireframes?node-id=202%3A5106"
            class="text-default fw-bold text-decoration-underline"
            target="_blank"
          >
            <i class="bi bi-caret-right-fill me-1"></i>Figma Wireframes 連結
          </a>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mt-3">
          <img
            v-lazy="{ src: require('@/assets/images/mbTool/wireframe.png') }"
            alt="wireframe"
            class="w-100"
          />
        </div>
      </div>
    </div>
    <!-- Design Guideline -->
    <div class="row py-5 my-5">
      <div class="col-md-12">
        <div class="text-center">
          <h3 class="text-uppercase ls-lg">Design Guideline</h3>
          <img
            v-lazy="{
              src: require('@/assets/images/mbTool/design-guideline.jpg'),
            }"
            alt="design guideline"
            class="w-100 rounded-lg my-3"
          />
        </div>
      </div>
    </div>
    <!-- UI Design -->
    <div class="row align-items-center py-5">
      <div class="col-md-6 order-md-5">
        <div class="">
          <h3 class="text-uppercase ls-lg">UI Design</h3>
          <h4 class="my-3 text-secondary">
            測試完可用性錯誤後，我便開始在Figma中設計最終畫面。
          </h4>
          <p>
            因使用者以女性為主，色彩配色使用較為輕柔的粉色，區塊也已更為圓角的方式展現親和，左右滑動將可變更寶寶，當性別不同時，部分區塊顏色也將改變，以利使用者能更清楚現在紀錄的是哪位，而群組成員也可隨時觀看紀錄。
          </p>
          <p>
            而紀錄的數據也可顯示寶寶目前狀況，當寶寶身體不適亦可將數據給醫生當作診斷評估，底部也用演算法推薦當前的商品讓用戶能快速搜尋並購買合適的產品。
          </p>
        </div>
      </div>
      <div class="col-md-6 order-md-1">
        <div class="mt-3">
          <div class="mockup-phone">
            <div class="ui-pic">
              <img
                v-lazy="{ src: require('@/assets/images/mbTool/ui.png') }"
                alt="UI Design"
                class="w-100 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <img
          v-lazy="{ src: require('@/assets/images/mbTool/ui-1.jpg') }"
          alt="寶寶紀錄首頁"
          class="w-100 rounded-lg my-3"
        />
        <img
          v-lazy="{ src: require('@/assets/images/mbTool/ui-2.jpg') }"
          alt="寶寶紀錄內頁"
          class="w-100 rounded-lg my-3"
        />
        <img
          v-lazy="{ src: require('@/assets/images/mbTool/ui-3.jpg') }"
          alt="寶寶商品首頁"
          class="w-100 rounded-lg my-3"
        />
        <img
          v-lazy="{ src: require('@/assets/images/mbTool/ui-4.jpg') }"
          alt="寶寶商品內頁"
          class="w-100 rounded-lg my-3"
        />
        <img
          v-lazy="{ src: require('@/assets/images/mbTool/ui-5.jpg') }"
          alt="用戶個人頁"
          class="w-100 rounded-lg my-3"
        />
      </div>
    </div>
    <!-- Prototype -->
    <div class="row align-items-center py-5">
      <div class="col-md-6 order-md-1">
        <div class="ps-4">
          <h3 class="text-uppercase ls-lg">Protoytpe</h3>
          <h4 class="my-3 text-secondary">
            使用Figma製作了部分功能的原型，展示原型交互，模擬產品完整的體驗。
          </h4>
          <!-- <a
            href="https://www.figma.com/proto/W5hxLQ1uF4MbkrPnHD13TW/MBTool?node-id=184%3A220&viewport=436%2C-1439%2C0.25&scaling=scale-down"
            class="text-default"
            target="_blank"
          >
            <i class="bi bi-caret-right-fill me-1"></i>figma prototype 連結
          </a> -->
        </div>
      </div>
      <div class="col-md-6 order-md-5">
        <div class="mt-3">
          <img
            v-lazy="{ src: require('@/assets/images/proto.svg') }"
            alt="prototype"
            class="w-100"
          />
        </div>
      </div>
    </div>
    <div class="row align-items-center py-5">
      <div class="col-md-6 order-md-5">
        <div class="ps-4">
          <h5>登入註冊及新增寶寶</h5>
          <p class="text-secondary">
            讓使用者快速使用第三方註冊登入，免去填寫資料的麻煩，並可立即加入寶寶基本資料。
          </p>
        </div>
      </div>
      <div class="col-md-6 order-md-1">
        <div class="mt-3">
          <div class="mockup-phone">
            <figure class="ui-pic overflow-hidden">
              <video width="280" controls playsinline preload>
                <source src="@/assets/images/mbTool/1.mp4" type="video/mp4" />
                <p>您的瀏覽器不支持播放該視頻！</p>
              </video>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="row align-items-center py-5">
      <div class="col-md-6 order-md-1">
        <div class="ps-4">
          <h5>紀錄寶寶及瀏覽歷史紀錄</h5>
          <p class="text-secondary">
            新增寶寶紀錄及用數據圖表顯示寶寶正常狀態，出現異常狀態時可即時就醫並出示歷史紀錄給醫師觀看，讓醫師更能確診寶寶病因。
          </p>
        </div>
      </div>
      <div class="col-md-6 order-md-5">
        <div class="mt-3">
          <div class="mockup-phone">
            <div class="ui-pic overflow-hidden">
              <video width="280" controls playsinline preload>
                <source src="@/assets/images/mbTool/2.mp4" type="video/mp4" />
                <p>您的瀏覽器不支持播放該視頻！</p>
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row align-items-center py-5">
      <div class="col-md-6 order-md-5">
        <div class="ps-4">
          <h5>母嬰商品購物</h5>
          <p class="text-secondary">
            在紀錄寶寶時，有缺少用品(如尿布、奶粉等)，可讓使用者能方便快速購買相關母嬰用品。
          </p>
        </div>
      </div>
      <div class="col-md-6 order-md-1">
        <div class="mt-3">
          <div class="mockup-phone">
            <div class="ui-pic overflow-hidden">
              <video width="280" controls playsinline preload>
                <source src="@/assets/images/mbTool/3.mp4" type="video/mp4" />
                <p>您的瀏覽器不支持播放該視頻！</p>
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import c3 from "c3";
import "c3/c3.min.css";

export default {
  data() {
    return {
      persona: [
        "身為一位遠距離阿嬤，我希望能隨時看到寶貝孫子的成長照片，這樣才能像陪著他們一同長大。",
        "身為一位阿嬤，我希望能為我的寶貝孫子買到合適且可愛的衣物，這樣拍照穿著我買的衣服很可愛。",
        "身為一位忙碌的媽媽，我希望點開app，就能找到需要買的商品，這樣才不會佔用太多時間。",
        "身為一位媽媽，我希望孩子能健康成長，隨時記錄，也能方便觀察孩子成長過程。",
        "身為一位媽媽，我希望孩子吃得白胖，笑得開心，能在愛的環境下長大。",
        "身為一位專業月嫂，希望app的數據能幫助我的專業，讓客戶在我協助下能放心坐月子。",
      ],
      useToolIcons: [],
      chart: {},
      genderChart: {},
      ageChart: {},
    };
  },
  props: ["detectWidth"],
  methods: {
    getToolIcons() {
      let loader = this.$loading.show();

      fetch(`${process.env.VUE_APP_API}/toolIcons`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          loader.hide();
          this.useToolIcons = res.slice(7, 10).reverse();
        })
        .catch((err) => {
          loader.hide();
          console.dir(err);
        });
    },
  },
  mounted() {
    this.getToolIcons();

    // 年齡比例
    this.chart = c3.generate({
      bindto: "#ageChart",
      data: {
        columns: [
          ["25-35歲", 38],
          ["36-55歲", 42],
          ["56歲以上", 20],
        ],
        type: "donut",
        colors: {
          "25-35歲": "#B16EEC",
          "36-55歲": "#7B7BE8",
          "56歲以上": "#FFb619",
        },
      },
      donut: {
        title: "年齡比例",
      },
    });

    // 性別比例
    this.chart = c3.generate({
      bindto: "#genderChart",
      data: {
        columns: [
          ["男性", 15],
          ["女性", 85],
        ],
        type: "donut",
        colors: {
          男性: "#69BAFF",
          女性: "#FF7F97",
        },
      },
      donut: {
        title: "性別比例",
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.mbtool-bg {
  position: relative;
  background: linear-gradient(135deg, #fdeaa5, white);
}
.list-circle {
  list-style: circle;
}
.process {
  svg {
    fill: var(--bs-default);
    width: 60px;
  }
}
.mockup-phone {
  position: relative;
  margin: auto;
  text-align: center;
  width: 100%;
  max-width: 296px;
  height: 620px;
  border-radius: 34px;
  overflow-y: hidden;
  border: 8px solid var(--bs-gray-dark);
  &:before,
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  &:before {
    width: 100px;
    height: 20px;
    background-color: var(--bs-gray-dark);
    border-radius: 0 0 1rem 1rem;
    z-index: 1;
  }
  &:after {
    width: 40px;
    height: 4px;
    background-color: var(--bs-gray-600);
    top: 4px;
    border-radius: 1rem;
    z-index: 2;
  }
}
.ui-pic {
  position: absolute;
  width: 100%;
  max-width: 290px;
  height: 100%;
  top: 0px;
  left: 0px;
  overflow: scroll;
  border-radius: 1.6rem;
}
</style>
