<script setup>
import { onMounted, watch, ref } from 'vue';
import TaskModel from '../../models/TaskModel';
import { taskMasterRepository } from '../../repositories/TaskMasterRepository';
import { taskRepository } from '../../repositories/TaskRepository';
const targetDate = ref(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()));
const inprogressTasks = ref([]);
const completedTasks = ref([]);

const loadTask = async () => {
    const taskMasters = await taskMasterRepository.getByDate(targetDate.value);
    const tasks = await taskRepository.getByDate(targetDate.value);
    console.log(tasks);
    const cTasks = new Array();
    const pTasks = new Array();
    taskMasters.map((taskMaster) => {
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
const daysLeftMessage = (days) => days == 0 ? '今日まで' : `あと${days}日`;
const completeTask = async (taskMaster) => {
    let newTask = new TaskModel();
    newTask.taskMasterId = taskMaster.id;
    newTask.start = taskMaster.getStartOfTargetDate(targetDate.value);
    newTask.end = taskMaster.getEndOfTargetDate(targetDate.value);
    newTask.completionDate = targetDate.value;
    newTask.count = 1;
    await taskRepository.add(newTask);
    console.log(newTask);
    loadTask();
};
const cancelTask = async (taskMaster) => {
    const targetTaskIds = await taskRepository.getByTaskMasterId(taskMaster.id);
    await taskRepository.delete(targetTaskIds.map(t => t.id));
    loadTask();
};

watch(targetDate, () => {
    loadTask();
})
onMounted(async () => {
    await loadTask();
});
</script>
<template>
    <div class="columns">
        <div>
            <v-date-picker mode="date" v-model="targetDate"></v-date-picker>
        </div>
        <div class="column is-5">
            <header>未完了タスク</header>
            <div v-for="task in inprogressTasks" :key="task.key" class="tile is-parent">
                <div class="tile is-child box">
                    <div class="tile is-child">{{ task.name }}</div>
                    <div class="tile is-child">{{ task.content }}</div>
                    <footer class="tile is-child columns">
                        <div class="column is-3">
                            <button
                                type="button"
                                class="button is-primary"
                                @click="completeTask(task)"
                            >完了</button>
                        </div>
                        <div class="column is-9">
                            <span>{{ daysLeftMessage(task.getDaysLeft(targetDate)) }}</span>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
        <div class="column is-5 is-parent">
            <header>完了タスク</header>
            <div v-for="task in completedTasks" :key="task.key" class="tile is-parent">
                <div class="tile is-child box">
                    <div class="tile is-child">{{ task.name }}</div>
                    <div class="tile is-child">{{ task.content }}</div>
                    <div class="tile is-child">完了！</div>
                    <footer class="tile">
                        <button
                            type="button"
                            class="button is-danger"
                            @click="cancelTask(task)"
                        >取り消し</button>
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