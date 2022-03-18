<script setup>
import { reactive } from "vue";
import CustomModal from "./CustomModal.vue";
import TaskMasterModel from "../../models/TaskMasterModel";
import { taskMasterRepository } from "../../repositories/TaskMasterRepository";
import IntervalTypeSelector from "./IntervalTypeSelector.vue";
const props = defineProps({
    isShow: {
        type: Boolean,
        required: true
    },
    showModal: {
        type: Function,
        required: true
    },
    hideModal: {
        type: Function,
        required: true
    },
});
const emits = defineEmits(['updateTaskEvent']);
let taskMaster = reactive(new TaskMasterModel());
const confirm = () => {
    taskMasterRepository.add(taskMaster);
    emits('updateTaskEvent');
};
const selectInterval = (...args) => {
    taskMaster.intervalType = args[0];
};
</script>
<template>
    <CustomModal
        :isShow="props.isShow"
        :confirmEvent="confirm"
        :showModal="props.showModal"
        :hideModal="props.hideModal"
    >
        <template v-slot:title>新規登録</template>
        <template v-slot:content>
            <div class="field">
                <label class="label">タスク名</label>
                <input v-model="taskMaster.name" placeholder="タスク名" class="input" />
            </div>
            <div class="field">
                <label class="label">タスク内容</label>
                <input v-model="taskMaster.content" placeholder="タスク内容" class="input" />
            </div>
            <label class="label">開始・終了</label>
            <div class="field is-grouped">
                <input v-model="taskMaster.start" type="date" placeholder="start" class="input" />
                <input v-model="taskMaster.end" type="date" placeholder="end" class="input" />
            </div>
            <label class="label">種別</label>
            <div class="field is-grouped">
                <p class="control">
                    <input v-model="taskMaster.intervalNumber" type="Number" placeholder="何" class="input" />
                </p>
                <p class="control is-expanded pt-1">
                    <IntervalTypeSelector @selectEvent="selectInterval"></IntervalTypeSelector>
                </p>
            </div>
        </template>
    </CustomModal>
</template>
<style scoped>
</style>