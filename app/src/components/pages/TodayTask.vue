<script setup>
import { onMounted, ref } from 'vue';
import { taskMasterRepository } from '../../repositories/TaskMasterRepository';
const today = new Date();

const tasks = ref([]);
onMounted(async () => {
    const todayTasks = await taskMasterRepository.getByDate(today);
    todayTasks.map((task, index) => {
        const i = Math.ceil((index + 1) / 3) - 1;
        if (tasks.value[i] == undefined) tasks.value[i] = [];
        tasks.value[i].push(task);
    });
});
</script>
<template>
    <div v-for="task in tasks" :key="task.key" class="tile is-ancestor">
        <div v-for="t in task" :key="t.key" class="tile is-parent">
            <div class="tile is-child box">
                <div class="tile is-child">{{ t.name }}</div>
                <div class="tile is-child">{{ t.content }}</div>
                <button type="button" class="button is-primary tile">完了</button>
            </div>
        </div>
    </div>
</template>