<template>
  <div
    class="w-[100%] fixed bottom-0 left-0 right-0 py-[10px] px-[20px]"
    style="
      border-radius: 10px 10px 0px 0px;
      background: #fff;
      box-shadow: 0px -2px 30px 0px rgba(0, 0, 0, 0.07);
    "
  >
    <div class="flex justify-around">
      <div
        v-for="(menu, index) of menus"
        class="text-[#C0C5C2] flex flex-col items-center"
      >
        <RouterLink :to="'/' + menu.route" class="flex flex-col items-center">
          <div v-html="menu.icon"></div>
          <p
            style="
              text-align: center;
              font-feature-settings: 'clig' off, 'liga' off;
              font-family: Poppins;
              font-size: 13px;
              font-style: normal;
              font-weight: 400;
              line-height: 12px; /* 133.333% */
              letter-spacing: 0.16px;
            "
          >
            {{ menu.title }}
          </p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const page = Number(localStorage.getItem("page")) || 0;

const getRouteMain = (page) => {
  if (page === 1) {
    return "driver-order";
  } else if (page === 0) {
    return "order-vehicle";
  } else {
    return "restaurant";
  }
};

const menus = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.514 3.47698C12.153 3.19639 11.6477 3.19639 11.2866 3.47698L4.13632 9.03458C3.89258 9.22403 3.75 9.51543 3.75 9.82413V20C3.75 20.5523 4.19772 21 4.75 21H8.35744C8.90972 21 9.35744 20.5523 9.35744 20V14.9581C9.35744 14.4058 9.80515 13.9581 10.3574 13.9581H13.4432C13.9955 13.9581 14.4432 14.4058 14.4432 14.9581V20C14.4432 20.5523 14.891 21 15.4432 21H19.0507C19.603 21 20.0507 20.5523 20.0507 20V9.82413C20.0507 9.51543 19.9081 9.22403 19.6643 9.03458L12.514 3.47698Z" fill="currentColor"/>
</svg>`,
    title: "Trang chủ",
    route: getRouteMain(page),
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
  <g clip-path="url(#clip0_4005_5024)">
    <path d="M20.25 4.125C20.25 3.29656 19.5784 2.625 18.75 2.625H18.375V3.75C18.375 4.16421 18.0392 4.5 17.625 4.5H16.875C17.2892 4.5 17.625 4.16421 17.625 3.75V1.5C17.625 1.08577 17.2892 0.75 16.875 0.75C16.4608 0.75 16.125 1.08577 16.125 1.5V2.625H14.25V3.75C14.25 4.16421 13.9142 4.5 13.5 4.5H12.75C13.1642 4.5 13.5 4.16421 13.5 3.75V1.5C13.5 1.08577 13.1642 0.75 12.75 0.75C12.3358 0.75 12 1.08577 12 1.5V2.625H9.75V3.75C9.75 4.16421 9.41421 4.5 9 4.5H8.25C8.66421 4.5 9 4.16421 9 3.75V1.5C9 1.08577 8.66421 0.75 8.25 0.75C7.83579 0.75 7.5 1.08577 7.5 1.5V2.625H5.625V3.75C5.625 4.16421 5.28921 4.5 4.875 4.5H4.125C4.53921 4.5 4.875 4.16421 4.875 3.75V1.5C4.875 1.08577 4.53921 0.75 4.125 0.75C3.71079 0.75 3.375 1.08577 3.375 1.5V2.625H2.25C1.42156 2.625 0.75 3.29656 0.75 4.125V6.375H20.25V4.125Z" fill="currentColor"/>
    <path d="M19.125 15C16.8468 15 15 16.8468 15 19.125C15 21.4032 16.8468 23.25 19.125 23.25C21.4032 23.25 23.25 21.4032 23.25 19.125C23.25 16.8468 21.4032 15 19.125 15ZM19.125 19.875C19.029 19.875 18.9379 19.8553 18.8535 19.8224L17.4844 20.918L17.0156 20.332L18.3862 19.2358C18.3807 19.1994 18.375 19.163 18.375 19.125C18.375 18.8481 18.5268 18.6089 18.75 18.479V16.125H19.5V18.479C19.7232 18.6089 19.875 18.8481 19.875 19.125C19.875 19.5392 19.5392 19.875 19.125 19.875Z" fill="currentColor"/>
    <path d="M2.25 21H14.6248C14.384 20.4227 14.25 19.7896 14.25 19.125C14.25 17.0974 15.4884 15.3599 17.2496 14.625H15.375V12.375H17.625V14.4876C18.0978 14.3347 18.6013 14.25 19.125 14.25C19.5129 14.25 19.8883 14.3001 20.25 14.3857V7.125H0.75V19.5C0.75 20.3287 1.42124 21 2.25 21ZM15.375 8.25H17.625V10.5H15.375V8.25ZM11.25 8.25H13.5V10.5H11.25V8.25ZM11.25 12.375H13.5V14.625H11.25V12.375ZM11.25 16.5H13.5V18.75H11.25V16.5ZM7.125 8.25H9.375V10.5H7.125V8.25ZM7.125 12.375H9.375V14.625H7.125V12.375ZM7.125 16.5H9.375V18.75H7.125V16.5ZM3 8.25H5.25V10.5H3V8.25ZM3 12.375H5.25V14.625H3V12.375ZM3 16.5H5.25V18.75H3V16.5Z" fill="currentColor"/>
  </g>
  <defs>
    <clipPath id="clip0_4005_5024">
      <rect width="24" height="24" fill="currentColor"/>
    </clipPath>
  </defs>
</svg>`,
    title: "Lịch sử",
    route: "history",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 12C14.4752 12 16.5 9.97495 16.5 7.5C16.5 5.02505 14.4752 3 12 3C9.52477 3 7.5 5.02505 7.5 7.5C7.5 9.97495 9.52477 12 12 12ZM12 14.25C9.01884 14.25 3 15.7688 3 18.75V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V18.75C21 15.7688 14.9812 14.25 12 14.25Z" fill="currentColor"/>
</svg>`,
    title: "Cá nhân",
    route: "profile",
  },
];
</script>

<style></style>
