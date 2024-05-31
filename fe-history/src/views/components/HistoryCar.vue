<script setup>
const historycar = defineProps(['status'])
</script>

<template>
    <RouterLink :to="{ name: 'HistoryDetail' }">
        <div class="p-5 flex flex-col " style="border-bottom: 1px solid #DCE8E9; gap: 11px;">
            <div class="flex justify-between items-center">
                <div>
                    <p class="uppercase text-xs" style="font-size: 14px;">ORDB1234</p>
                    <p class="text-xs">Người nhận: Paul Pogba </p>
                </div>
                <div class="px-2 py-1 rounded-md" :class="historycar.status === 'Đang chờ' ? 'wait' : 'completed '">
                    <p class="text-xs font-normal"
                        :class="historycar.status === 'Đang chờ' ? 'history-wait' : 'history-completed'">{{
                            historycar.status }}</p>
                </div>
            </div>
            <div class="flex items-start gap-2" s>
                <img class="w-10" src="@/assets/svg/car.svg" alt="">
                <div class="flex-col items-center">
                    <div class="flex items-center " style="gap: 5px;">
                        <img class="w-2" src="@/assets/svg/adress.svg" alt="">
                        <p style="font-size: 16px ; font-family:  Poppins;">130A, Hà Huy Tập</p>
                    </div>
                    <p style="font-family: Poppins; color: #17A008; font-size: 14px;">Đang đến</p>
                </div>
            </div>
        </div>
    </RouterLink>
</template>

<style scoped>
.wait {
    background-color: #FFF4C7;
}

.completed {
    background-color: #2ECB70;
}

.history-wait {
    color: #7E6604;
}

.history-completed {
    color: #FFF;
}
</style>
