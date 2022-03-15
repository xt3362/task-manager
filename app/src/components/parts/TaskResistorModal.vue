<script setup>
import CustomModal from "./CustomModal.vue";
</script>
<template>
<CustomModal>
    <template v-slot:title>
        新規登録
    </template>
    <template v-slot:content>
        <input type="text">
        <button type="button">ボタン</button>
    </template>
</CustomModal>
</template>