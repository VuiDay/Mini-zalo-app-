<script>

</script>
<template>
    <section>
        <div class="w-full relative">
            <img class="w-full " src="@/assets/image/header.png" alt="">
            <RouterLink :to="{ name: 'HistoryMain' }">
                <div class="absolute flex p-1 " style="top: 40px; left: 24px; gap: 10px;">
                    <img src="@/assets/svg/arrowleft.svg" alt="arrowleft">
                    <div class="text-xl font-semibold" style="font-family: Poppins;">Chi tiết</div>
                </div>
            </RouterLink>
        </div>

        <div class="mx-6 flex flex-col pb-12" style="gap: 25px;">
            <div class="flex justify-between items-center">
                <div class="flex items-center " style="gap: 10px;">
                    <img class="w-14 h-14 " style="clip-path: circle(50%); width: 56px ; height: 56px;"
                        src="https://anhanime.com/wp-content/uploads/2022/05/A%CC%89nh-saitama-4.jpg" alt="">
                    <div class="flex flex-col" style="gap: 4px;">
                        <p class=" font-medium" style="font-family:  Poppins; font-size: 16px; color: #111;">Cao Minh
                            Quân</p>
                        <p class="text-xs font-normal" style="font-family: Poppins; color: #4f4f4f;">124 đánh giá</p>
                        <div class="flex" style="gap: 4px;">
                            <img class="w-4 h-4" src="@/assets/svg/star.svg" alt="">
                            <img class="w-4 h-4" src="@/assets/svg/star.svg" alt="">
                            <img class="w-4 h-4" src="@/assets/svg/star.svg" alt="">
                            <img class="w-4 h-4" src="@/assets/svg/star.svg" alt="">
                            <img class="w-4 h-4" src="@/assets/svg/stardark.svg" alt="">
                            <p class="text-xs font-medium">4.1</p>
                        </div>
                    </div>
                </div>

                <div class="flex items-center">
                    <div class="px-2 py-1 rounded-md mr-1 " style="background-color: #2ECB70;">
                        <p style="font-size: 10px; font-family: Poppins; color: #FFF">Xong</p>
                    </div>
                    <img src="@/assets/svg/car.svg" alt="car">
                </div>
            </div>

            <div class="flex " style="gap: 21px;">
                <div class="flex-col flex items-center" style="gap: 8px;">
                    <img src="@/assets/svg/adresstart.svg" style="fill: #DE4B65;" alt="">
                    <img src="@/assets/svg/ellipse.svg" style="fill: #DE4B65;" alt="">
                    <img src="@/assets/svg/ellipse.svg" style="fill: #DE4B65;" alt="">
                    <img src="@/assets/svg/ellipse.svg" style="fill: #DE4B65;" alt="">
                    <img src="@/assets/svg/addressEnd.svg" style="fill: #DE4B65;" alt="">
                </div>
                <div>
                    <div>
                        <p class="text-xs font-normal" style="color: #77869E; font-family: Poppins;">Từ</p>
                        <p class="font-medium mt-1" style="font-size: 14px;">156, Phạm Đình Toái</p>
                    </div>
                    <div class="mt-3">
                        <p class="text-xs font-normal" style="color: #77869E; font-family: Poppins;">Đến</p>
                        <p class="font-medium mt-1" style="font-size: 14px;">130A, Hà Huy Tập</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col " style="gap: 25px;">
                <div>
                    <p class="text-xs font-normal" style="color: #77869E;">Cửa hàng</p>
                    <p class="mt-1">Highland Lotte</p>
                </div>
                <div>
                    <p class="text-xs font-normal" style="color: #77869E;">Điện thoại tài xế</p>
                    <p class="mt-1" style="color: #111; font-size: 14px; line-height: 24px;">0961089613</p>
                </div>
            </div>

            <div class="flex flex-col " style="gap: 25px; padding-bottom: 85px;">
                <div>
                    <p class="text-xs font-normal" style="color: #77869E;">Thanh toán</p>
                    <p class="mt-1" style="color: #111; font-size: 14px; line-height: 24px;">Trự tiếp</p>
                </div>
                <div>
                    <p class="text-xs font-normal" style="color: #77869E;">Giá</p>
                    <p class="mt-1" style="color: #111; font-size: 14px; line-height: 24px;">150.000 vnd</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.router-link-exact-active {
    color: #2ecb70;
}
</style>