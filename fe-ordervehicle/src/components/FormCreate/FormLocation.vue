<template>
  <div style="padding: 36px 24px 0 24px" class="relative">
    <div class="flex items-center">
      <p
        onclick="history.back()"
        style="
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          padding: 14px 20px;
          border-radius: 50px;
        "
      >
        <img src="/arrowleft.svg" alt="" />
      </p>
      <p
        class="text-[#111] ml-[10px] text-[20px] font-bold leading-normal tracking-[-0.8px]"
      >
        Đặt xe
      </p>
    </div>

    <div v-if="active === 0" class="" style="margin-top: 15px">
      <div class="flex flex-col" style="margin-bottom: 10px">
        <label
          for=""
          style="
            color: #77869e;
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.239px;
          "
          >Vị trí hiện tại</label
        >
        <input
          type="text"
          value="hehehe"
          style="
            background-color: #f0f5f5;
            padding: 15px 19px 15px 16px;
            margin-top: 5px;
          "
        />
      </div>
      <div class="flex flex-col" style="margin-bottom: 10px">
        <label
          for=""
          style="
            color: #77869e;
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.239px;
          "
          >Điểm đến</label
        >
        <input
          type="text"
          value="hehehe"
          style="
            background-color: #f0f5f5;
            padding: 15px 19px 15px 16px;
            margin-top: 5px;
          "
        />
      </div>
      <div class="flex flex-col" style="margin-bottom: 10px">
        <label
          for=""
          style="
            color: #77869e;
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.239px;
          "
          >Chọn phương tiện của bạn</label
        >
        <div class="flex justify-between mt-2">
          <span v-html="iconBike" @click=""></span>
          <span v-html="iconCar"></span>
        </div>
      </div>
      <div style="margin-top: 20px">
        <button
          style="
            width: 327px;
            height: 56px;
            border-radius: 50px;
            background: #2ecb70;
            box-shadow: 2px 5px 6px 0px rgba(0, 0, 0, 0.25);
            color: white;
          "
          @click="() => (active = 1)"
        >
          Xác nhận đặt xe
        </button>
      </div>
    </div>
    <div v-if="active === 1" style="margin-top: 15px">
      <p
        style="
          color: #111;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -0.8px;
        "
      >
        Xác nhận đặt
      </p>
      <div class="flex items-start justify-between" style="margin-top: 15px">
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 7px;
          "
        >
          <img src="/locatered.svg" alt="" />
          <img src="/ellipse.svg" alt="" />
          <img src="/ellipse.svg" alt="" />
          <img src="/dot.svg" alt="" />
        </div>
        <div
          class="mb-2 flex flex-col items-start"
          style="gap: 10px; width: 70%"
        >
          <div
            style="
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 4px;
            "
          >
            <p
              style="
                color: #77869e;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 0.239px;
              "
            >
              Vị trí hiện tại
            </p>
            <p
              style="
                color: #111;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                letter-spacing: 0.4px;
              "
            >
              32 Samwell Sq, Chevron
            </p>
          </div>
          <div
            style="
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 4px;
            "
          >
            <p
              style="
                color: #77869e;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 0.239px;
              "
            >
              Điểm đến
            </p>
            <p
              style="
                color: #111;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                letter-spacing: 0.4px;
              "
            >
              21b, Karimu Kotun Street, Victoria Island
            </p>
          </div>
        </div>
        <div>
          <img src="/iconbike.svg" alt="" />
        </div>
      </div>
      <div>
        <div style="margin: 25px 0">
          <p
            style="
              color: #77869e;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: 16px;
            "
          >
            Cửa hàng
          </p>
          <p
            style="
              color: #111;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 24px; /* 171.429% */
            "
          >
            ABCDEF
          </p>
        </div>
        <div style="margin: 25px 0">
          <p
            style="
              color: #77869e;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: 16px; /* 133.333% */
            "
          >
            Thanh toán
          </p>
          <p
            style="
              color: #111;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 24px; /* 171.429% */
            "
          >
            Thẻ
          </p>
        </div>
        <div style="margin: 25px 0">
          <p
            style="
              color: #77869e;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: 16px; /* 133.333% */
            "
          >
            Giá
          </p>
          <p
            style="
              color: #111;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 24px; /* 171.429% */
            "
          >
            150.000VNĐ
          </p>
        </div>
      </div>
      <div style="margin-top: 20px">
        <button
          style="
            width: 327px;
            height: 56px;
            border-radius: 50px;
            background: #2ecb70;
            box-shadow: 2px 5px 6px 0px rgba(0, 0, 0, 0.25);
            color: white;
          "
          @click=""
        >
          Xác nhận
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const active = ref(0);

const iconCar = `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="97" viewBox="0 0 150 97" fill="none">
  <g clip-path="url(#clip0_4005_5233)">
    <rect width="150" height="97" fill="#F0F5F5"/>
    <path d="M114.965 54.7779L114.144 60.3741C113.959 61.6406 113.081 62.5629 112.06 62.5629H107.916C108.029 62.0501 108.121 61.5251 108.174 60.9848C108.226 60.4742 108.252 60.0094 108.252 59.5692C108.252 53.3725 104.253 48.331 99.3395 48.331C94.4246 48.331 90.4252 53.3725 90.4252 59.5692C90.4252 59.8909 90.4422 60.2086 90.4633 60.5273C90.5102 61.2269 90.6107 61.9061 90.7557 62.5618H54.507C54.6205 62.0491 54.712 61.5251 54.7663 60.9859C54.8181 60.4731 54.8432 60.0104 54.8432 59.5692C54.8432 53.3735 50.8446 48.331 45.9305 48.331C41.0165 48.331 37.017 53.3735 37.017 59.5692C37.017 59.8899 37.034 60.2086 37.0543 60.5273C37.1021 61.2279 37.2025 61.9071 37.3475 62.5639H36.296C36.296 62.5639 34.5041 55.3009 35.1343 52.0008C35.6261 49.428 36.8842 48.381 36.8842 48.381C36.8842 48.381 36.7659 44.6091 38.3788 40.7074C38.7206 39.8791 41.3794 35.3176 45.3821 30.7694C47.2113 28.6899 48.65 28.0413 51.1127 28.0332C58.0877 28.0097 74.1228 27.9668 77.9108 28.0444C80.431 28.0965 81.8795 28.5908 84.0691 30.2363C84.2863 30.3987 84.3989 30.7133 84.3357 31.0207C84.2725 31.3281 84.0521 31.5426 83.8002 31.5426H83.6576L90.733 40.2754C90.733 40.2754 93.5279 40.2928 94.4595 40.3408C99.09 40.5818 107.418 41.4439 112.467 46.2964C113.148 46.9511 113.594 47.9224 113.702 48.9928C113.843 50.385 113.864 51.9252 113.864 51.9252C114.688 52.4696 115.133 53.6248 114.965 54.7779ZM56.8547 31.5416H49.5444C48.7505 31.5416 47.9817 31.8736 47.3547 32.4894C45.6429 34.1727 44.3022 36.0295 43.3042 37.6658C43.1017 37.9977 43.066 38.4451 43.2118 38.821C43.356 39.1978 43.6566 39.4389 43.9887 39.445L56.8539 39.6738L56.8547 31.5416ZM60.7488 31.5416H60.2531V39.7341L60.7488 39.7433V31.5416ZM87.0398 40.208L80.017 31.5406H64.148V39.8015L80.9746 40.0997C80.9657 39.9945 80.9535 39.8924 80.9535 39.7841C80.9535 38.3644 81.7587 37.2133 82.7519 37.2133C83.7467 37.2133 84.5512 38.3644 84.5512 39.7841C84.5512 39.9138 84.5374 40.0384 84.5252 40.163L87.0398 40.208Z" stroke="#004448"/>
    <path d="M52.3601 59.1111C52.3601 63.8517 49.2889 67.5 45.7159 67.5C42.1429 67.5 39.0717 63.8517 39.0717 59.1111C39.0717 54.3705 42.1429 50.7222 45.7159 50.7222C49.2889 50.7222 52.3601 54.3705 52.3601 59.1111Z" stroke="#004448"/>
    <path d="M105.941 59.1111C105.941 63.8517 102.87 67.5 99.2971 67.5C95.7241 67.5 92.653 63.8517 92.653 59.1111C92.653 54.3705 95.7241 50.7222 99.2971 50.7222C102.87 50.7222 105.941 54.3705 105.941 59.1111Z" stroke="#004448"/>
  </g>
  <defs>
    <clipPath id="clip0_4005_5233">
      <rect width="150" height="97" rx="10" fill="white"/>
    </clipPath>
  </defs>
</svg>`;
const iconBike = `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="97" viewBox="0 0 150 97" fill="none">
  <g clip-path="url(#clip0_4005_5232)">
    <rect width="150" height="97" fill="#F0F5F5" fill-opacity="0.6"/>
    <path d="M91.724 50.1888L91.9576 50.5191L92.3294 50.3596C93.5902 49.8185 95.0802 49.5 96.4531 49.5C102.018 49.5 106.5 53.7866 106.5 59C106.5 64.2134 102.018 68.5 96.4531 68.5C90.9314 68.5 86.4062 64.0828 86.4062 59C86.4062 56.4747 87.5209 53.9582 89.5518 52.1328L89.8827 51.8354L89.6258 51.4722L88.1366 49.3666L87.8143 48.9108L87.3966 49.2813C85.0414 51.3703 83.2961 54.1139 82.6241 57.2984L82.6241 57.2985L82.3752 58.4785L82.3751 58.4788C81.9707 60.4029 80.1587 61.8333 78.039 61.8333H67.465H67.1184L66.9968 62.158C65.6017 65.8832 61.8448 68.5 57.5469 68.5C51.9817 68.5 47.5 64.2134 47.5 59C47.5 53.8907 51.8134 49.6954 57.2296 49.5318L58.1576 49.5037L57.6235 48.7444L55.2213 45.3286L55.0906 45.1428L54.8647 45.119C50.707 44.681 47.5 41.3357 47.5 37.3333C47.5 36.713 48.0369 36.1667 48.7578 36.1667H57.6121C59.1044 36.1667 60.4799 36.8695 61.2971 38.0326L61.2972 38.0327L62.1795 39.2876L62.3288 39.5H62.5885H77.3483H77.6079L77.7573 39.2876L79.5793 36.6965L79.5793 36.6965C79.8078 36.3716 80.2013 36.1667 80.6328 36.1667H85.9062H86.4062V35.6667V32.3333V31.8333H85.9062H84.1484C83.4276 31.8333 82.8906 31.287 82.8906 30.6667C82.8906 30.0463 83.4276 29.5 84.1484 29.5H87.6641C94.1974 29.5 99.4688 34.5352 99.4688 40.6667V44C99.4688 44.6203 98.9318 45.1667 98.2109 45.1667C95.3523 45.1667 92.6398 45.9035 90.2879 47.1943L89.7967 47.4639L90.1203 47.9214L91.724 50.1888ZM64.0498 62.5838L64.5173 61.8222H63.6236H57.5469C55.8537 61.8222 54.5313 60.538 54.5313 59C54.5313 57.4599 55.8559 56.1667 57.5469 56.1667H64.5129V55.6667V55.1667C63.0206 55.1667 61.6451 54.4638 60.8279 53.3008L60.8278 53.3006L60.2135 52.427L60.1174 52.2903L59.9585 52.2389C59.1956 51.992 58.3914 51.8333 57.5469 51.8333C53.4183 51.8333 50.0156 55.0223 50.0156 59C50.0156 62.9777 53.4183 66.1667 57.5469 66.1667C60.2745 66.1667 62.7261 64.7401 64.0498 62.5838ZM91.6344 54.3121L91.28 53.8109L90.8609 54.2594C89.5413 55.6714 88.9219 57.3294 88.9219 59C88.9219 62.9356 92.3948 66.1667 96.4531 66.1667C100.582 66.1667 103.984 62.9777 103.984 59C103.984 55.0223 100.582 51.8333 96.4531 51.8333C95.4889 51.8333 94.8675 51.977 93.9859 52.2694L93.3455 52.4819L93.7352 53.0327L97.504 58.3611L97.5042 58.3613C97.8737 58.8829 97.7375 59.5967 97.1634 59.9615L97.1622 59.9623C96.5738 60.3384 95.7797 60.1752 95.4027 59.6399L95.4021 59.6391L91.6344 54.3121Z" stroke="#004448"/>
  </g>
  <defs>
    <clipPath id="clip0_4005_5232">
      <rect width="150" height="97" rx="10" fill="white"/>
    </clipPath>
  </defs>
</svg>`;
const fakeData = [{}, {}];
</script>

<style scoped></style>
