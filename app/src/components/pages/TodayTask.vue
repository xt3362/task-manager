<script setup>
import { onMounted, ref } from 'vue';
import TaskModel from '../../models/TaskModel';
import { taskMasterRepository } from '../../repositories/TaskMasterRepository';
import { taskRepository } from '../../repositories/TaskRepository';
const targetDate = new Date();

const targetTasks = ref([]);
onMounted(async () => {
    const taskMasters = await taskMasterRepository.getByDate(targetDate);
    const tasks = await taskRepository.getByDate(targetDate);
    taskMasters.map((taskMaster, index) => {
        const i = Math.ceil((index + 1) / 3) - 1;
        if (targetTasks.value[i] == undefined) targetTasks.value[i] = [];
        targetTasks.value[i].push({
            taskMaster: taskMaster,
            task: tasks.find(t => t.taskMasterId == taskMaster.id)
        });
    });
});
const completeTask = async (taskMaster) =>{
    let newTask = new TaskModel();
    newTask.taskMasterId = taskMaster.id;
    newTask.start = taskMaster.getStartOfTargetDate(targetDate);
    newTask.end = taskMaster.getEndOfTargetDate(targetDate);
    newTask.count= 1;
    await taskRepository.add(newTask);
};
</script>
<template>
    <div v-for="targetTask in targetTasks" :key="targetTask.key" class="tile is-ancestor">
        <div v-for="target in targetTask" :key="target.key" class="tile is-parent">
            <div class="tile is-child box">
                {{target.task}}
                <div class="tile is-child">{{ target.taskMaster.name }}</div>
                <div class="tile is-child">{{ target.taskMaster.content }}</div>
                <div class="tile is-child">{{ target.taskMaster.getStartOfTargetDate(targetDate).toLocaleString() }}</div>
                <div class="tile is-child">{{ target.taskMaster.getEndOfTargetDate(targetDate).toLocaleString() }}</div>
                <footer class="tile">
                    <button type="button" class="button is-primary" @click="completeTask(target.taskMaster)">完了</button>
                </footer>
            </div>
        </div>
    </div>
</template>