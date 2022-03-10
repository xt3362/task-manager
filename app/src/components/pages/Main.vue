<script setup>
import { MainContentType } from '../../models/MainContentType';
import SideBar from '../commons/SideBar.vue';
import MainContent from './MainContent.vue';
const props = defineProps({
    contentType: Number 
});
const emits = defineEmits(['toggleContentEvent']);
</script>
<template>
<SideBar />
<MainContent></MainContent>
</template>