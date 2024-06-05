<template>
  <div
    class="flex flex-col"
    style="padding: 20px; border-bottom: 1px solid #dce8e9"
  >
    <div class="flex items-center justify-between">
      <div style="line-height: 16px">
        <p
          class="text-red-500"
          style="
            color: #0c341f;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px;
          "
        >
          {{ data.codeOrder }}
        </p>
        <p
          style="
            color: #545454;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px;
          "
        >
          Người nhận: {{ data.nameDriver }}
        </p>
      </div>
      <p
        style="
          border-radius: 5px;
          background: #2ecb70;
          color: #fff;
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          padding: 3px 6px;
          line-height: 16px;
        "
      >
        Xong
      </p>
    </div>
    <div class="flex" style="margin-top: 11px">
      <img src="/iconbike.svg" alt="" />
      <div class="" style="margin-left: 9px">
        <div class="flex items-center">
          <img src="/locate.svg" class="" style="margin-right: 5px" alt="" />
          <p
            style="
              color: #0c341f;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: 16px;
            "
          >
            {{ data.location }}
          </p>
        </div>
        <div
          style="
            color: #545454;
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px;
          "
        >
          {{ data.time }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = defineProps(["data"]);
</script>

<style scoped></style>
