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
const updateTask = async () => {
    tasks.value = await taskMasterRepository.getAll();
};
onMounted(updateTask);
watchEffect((tasks), updateTask);

</script>
<template>
    <div class="rows">
        <button type="button" @click="updateTask">更新</button>
        <button type="button" class="button is-primary" @click="showModal">タスク追加</button>
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
        <TaskResistorModal
            v-if="isShow"
            :isShow="isShow"
            :showModal="showModal"
            :hideModal="hideModal"
            @updateTaskEvent="updateTask"
        ></TaskResistorModal>
    </div>
</template>