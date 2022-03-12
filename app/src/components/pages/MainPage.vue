<script setup>
import { ref } from 'vue';
import SideBar from '../commons/SideBar.vue';
import MainContent from './MainContent.vue';
let contentType = ref(0);
const toggleContentEvent = (...args) => {
    contentType.value = args[0];
};
</script>
<template>
<SideBar
    @toggleContent="toggleContentEvent">
</SideBar>
<MainContent
    :contentType="contentType">
</MainContent>
</template>