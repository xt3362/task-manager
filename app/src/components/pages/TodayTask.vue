<script setup>
import { onMounted, ref } from 'vue';
import { compileStyleAsync } from 'vue/compiler-sfc';
import TaskModel from '../../models/TaskModel';
import { taskMasterRepository } from '../../repositories/TaskMasterRepository';
import { taskRepository } from '../../repositories/TaskRepository';
const targetDate = new Date();

const inprogressTasks = ref([]);
const completedTasks = ref([]);
const loadTask = async () => {
    const taskMasters = await taskMasterRepository.getByDate(targetDate);
    const tasks = await taskRepository.getByDate(targetDate);
    const cTasks = new Array();
    const pTasks = new Array();
    taskMasters.map((taskMaster, index) => {
        const completedTask = tasks.find(t => t.taskMasterId == taskMaster.id);
        if (completedTask) {
            cTasks.push(taskMaster);
        } else {
            pTasks.push(taskMaster);
        }
    });
    completedTasks.value = cTasks;
    inprogressTasks.value = pTasks;
};
onMounted(async () => {
    await loadTask();
});
const completeTask = async (taskMaster) => {
    let newTask = new TaskModel();
    newTask.taskMasterId = taskMaster.id;
    newTask.start = taskMaster.getStartOfTargetDate(targetDate);
    newTask.end = taskMaster.getEndOfTargetDate(targetDate);
    newTask.count = 1;
    await taskRepository.add(newTask);
    loadTask();
};
</script>
<template>
    <div class="container">
        <header></header>
    </div>
    <div class="tile is-ancestor">
        <div class="tile is-parent is-vertical">
            <div v-for="task in inprogressTasks" :key="task.key" class="tile is-parent">
                <div class="tile is-child box">
                    <div class="tile is-child">{{ task.name }}</div>
                    <div class="tile is-child">{{ task.content }}</div>
                    <div
                        class="tile is-child"
                    >{{ task.getStartOfTargetDate(targetDate).toLocaleString() }}</div>
                    <div
                        class="tile is-child"
                    >{{ task.getEndOfTargetDate(targetDate).toLocaleString() }}</div>
                    <footer class="tile">
                        <button
                            type="button"
                            class="button is-primary"
                            @click="completeTask(task)"
                        >完了</button>
                    </footer>
                </div>
            </div>
        </div>
        <div class="tile is-parent is-vertical">
            <div v-for="task in completedTasks" :key="task.key" class="tile is-parent">
                <div class="tile is-child box">
                    <div class="tile is-child">{{ task.name }}</div>
                    <div class="tile is-child">{{ task.content }}</div>
                    <div
                        class="tile is-child"
                    >{{ task.getStartOfTargetDate(targetDate).toLocaleString() }}</div>
                    <div
                        class="tile is-child"
                    >{{ task.getEndOfTargetDate(targetDate).toLocaleString() }}</div>
                    <footer class="tile">
                        <button
                            type="button"
                            class="button is-primary"
                            @click="completeTask(task)"
                        >完了</button>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.completed {
    background-color: azure;
}
</style>