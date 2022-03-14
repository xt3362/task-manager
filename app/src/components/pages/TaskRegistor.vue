<script setup>
import { reactive } from 'vue';
import TaskResistorItem from '../parts/TaskResistorItem.vue';
import draggable from 'vuedraggable'

let drag = false;
const tasks = reactive([
    {
        id: 1,
        name: "task1",
        description: "筋トレ",
        start: new Date(2022, 1, 1),
        end: new Date(2022, 2, 1),
        type: "monthly"
    },
    {
        id: 2,
        name: "task2",
        description: "資格勉強",
        start: new Date(2022, 1, 1),
        end: new Date(2022, 2, 1),
        type: "monthly"
    }
]);
</script>
<template>
    <div class="columns">
        <span class="column is-2">タスク登録</span>
        <span class="column is-8"></span>
        <span class="column is-2">タスク数：{{ tasks.length }}</span>
    </div>
    <draggable v-model="tasks" group="task" @start="drag = true" @end="drag = false" item-key="id">
        <template #item="{ element }">
            <TaskResistorItem :task="element"></TaskResistorItem>
        </template>
    </draggable>
</template>