<script setup>
import TaskMasterModel from '../../models/TaskMasterModel';
import CustomModal from './CustomModal.vue';
const props = defineProps({
    task: {
        type: TaskMasterModel,
        required: true
    },
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
</script>
<template>
    <CustomModal :isShow="props.isShow" :show-modal="props.showModal" :hide-modal="props.hideModal">
        <template v-slot:title>{{ props.task.name }}</template>
        <template v-slot:content>
            <div class="rows">
                <div class="row">
                    <label>内容</label>
                    <div>{{ props.task.content }}</div>
                </div>
            </div>
        </template>
    </CustomModal>
</template>