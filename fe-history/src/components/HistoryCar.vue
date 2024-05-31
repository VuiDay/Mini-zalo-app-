<script setup>
const { status } = defineProps(['status'])
</script>

<template>
    <div class="flex">
        <h1>ok</h1>
        <h1>ok ok</h1>
        {{ status }}
    </div>
</template>