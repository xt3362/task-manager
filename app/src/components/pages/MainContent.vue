<script setup>
import { MainContentType } from '../../models/MainContentType';
import TaskRegistor from './TaskRegistor.vue';
const props = defineProps({
    contentType: Number 
});
</script>
<template>
<div v-if="props.contentType == MainContentType.Home">
Home
</div>
<div v-if="props.contentType == MainContentType.TaskRegistor">
<TaskRegistor></TaskRegistor>
</div>
<div v-if="props.contentType == MainContentType.Daily">
日ごと
</div>
<div v-if="props.contentType == MainContentType.Weekly">
週ごと
</div>
<div v-if="props.contentType == MainContentType.Monthly">
月ごと
</div>
</template>