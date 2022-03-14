<script setup>
import { ref, reactive } from 'vue';
import TaskResistorItem from '../parts/TaskResistorItem.vue';
import draggable from 'vuedraggable'

let drag = ref(false);
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
    },
    {
        id: 3,
        name: "task3",
        description: "hogee",
        start: new Date(2022, 1, 1),
        end: new Date(2022, 2, 1),
        type: "monthly"
    }
]);
const addTask = () => {
    const newTask = {
        id: tasks.length + 1,
        name: `task${tasks.length + 1}`,
        description: "説明",
        start: new Date(2022,1,1),
        end: new Date(2022,3,1),
        type:"weekly"
    };
    tasks.push(newTask);
};
</script>
<template>
    <div class="rows">
        <div class="row columns">
            <span class="column is-2">タスク登録</span>
            <span class="column is-8">{{ drag }}</span>
            <span class="column is-2">タスク数：{{ tasks.length }}</span>
        </div>
        <draggable
            v-model="tasks"
            group="task"
            @start="drag = true"
            @end="drag = false"
            item-key="id"
            class="rows"
        >
            <template #item="{ element }">
                <TaskResistorItem :task="element"></TaskResistorItem>
            </template>
        </draggable>
        <footer class="row">
            <button type="button" class="button is-primary" @click="addTask">Add</button>
        </footer>
    </div>
</template>