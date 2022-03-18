<script setup>
import { ref } from 'vue';
import SideBar from '../commons/SideBar.vue';
import MainContent from './MainContent.vue';
import { MainContentType } from '../../models/Constant';
let contentType = ref(MainContentType.Home);
const toggleContentEvent = (...args) => {
    contentType.value = args[0];
};
</script>
<template>
    <div class="columns">
        <div class="column is-2">
            <SideBar @toggleContent="toggleContentEvent"></SideBar>
        </div>
        <div class="column is-9 p-4">
            <MainContent :contentType="contentType"></MainContent>
        </div>
    </div>
</template>