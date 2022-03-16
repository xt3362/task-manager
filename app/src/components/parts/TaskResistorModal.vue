<script setup>
import { reactive } from "vue";
import CustomModal from "./CustomModal.vue";
import TaskMasterModel from "../../models/TaskMasterModel";
import { taskMasterRepository } from "../../repositories/TaskMasterRepository";
const taskMaster = reactive(new TaskMasterModel());
const confirm = () => {
    alert(taskMaster.name);
    taskMasterRepository.add(taskMaster);
};
</script>
<template>
    <CustomModal :confirmEvent="confirm">
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
            <div class="field">
                <label class="label">開始</label>
                <input v-model="taskMaster.start" type="date" placeholder="start" class="input" />
            </div>
            <div class="field">
                <label class="label">終了</label>
                <input v-model="taskMaster.end" type="date" placeholder="end" class="input" />
            </div>
        </template>
    </CustomModal>
</template>