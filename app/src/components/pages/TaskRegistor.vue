<script setup>
import { reactive } from 'vue';
import TaskResistorItem from '../parts/TaskResistorItem.vue';

const tasks = reactive([
    {
        name: "task1",
        description: "筋トレ",
        start: new Date(2022, 1, 1),
        end: new Date(2022, 2, 1),
        type: "monthly"
    },
    {
        name: "task2",
        description: "資格勉強",
        start: new Date(2022, 1, 1),
        end: new Date(2022, 2, 1),
        type: "monthly"
    }
]);
</script>
<template>
    <div class="section" v-for="task in tasks" :key="task.id">
        <TaskResistorItem :task="task"></TaskResistorItem>
    </div>
</template>