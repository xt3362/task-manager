<script setup>
import { MainContentType } from '../../models/Constant';
import TaskRegistor from './TaskRegistor.vue';
import TaskCalendar from './TaskCalendar.vue';
const props = defineProps({
    contentType: Number
});
</script>
<template>
    <div v-if="props.contentType == MainContentType.Home">Home</div>
    <article class="box" v-if="props.contentType == MainContentType.TaskRegistor">
        <TaskRegistor></TaskRegistor>
    </article>
    <div v-if="props.contentType == MainContentType.Daily">日ごと</div>
    <div v-if="props.contentType == MainContentType.Weekly">週ごと</div>
    <div v-if="props.contentType == MainContentType.Monthly">月ごと</div>
    <div v-if="props.contentType == MainContentType.Calendar">
        <TaskCalendar></TaskCalendar>
    </div>
</template>