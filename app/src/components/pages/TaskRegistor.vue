<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import draggable from 'vuedraggable'
import TaskResistorModal from '../parts/TaskResistorModal.vue';
import TaskResistorItem from '../parts/TaskResistorItem.vue';
import { taskMasterRepository } from '../../repositories/TaskMasterRepository';

let drag = ref(false);
const tasks = ref([]);
const isShow = ref(false);
const showModal = () => isShow.value = true;
const hideModal = () => isShow.value = false;
const deleteTask = async (taskId) => {
    if (confirm("本当に削除しますか？") == false) return;
    await taskMasterRepository.deleteById(taskId);
    updateTask();
};
const updateTask = async () => {
    tasks.value = await taskMasterRepository.getAll();
};
onMounted(updateTask);
</script>
<template>
    <div class="rows">
        <div class="row columns">
            <span class="column is-2">
                <button type="button" class="button is-primary" @click="showModal">新規追加</button>
            </span>
            <span class="column is-8"></span>
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
                <TaskResistorItem :task="element" :delete-task="deleteTask"></TaskResistorItem>
            </template>
        </draggable>
        <TaskResistorModal
            v-if="isShow"
            :isShow="isShow"
            :showModal="showModal"
            :hideModal="hideModal"
            @updateTaskEvent="updateTask"
        ></TaskResistorModal>
    </div>
</template>