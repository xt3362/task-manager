<script setup>
import TaskMasterModel from '../../models/TaskMasterModel';

const props = defineProps({
    task: {
        type: Object,
        required: true,
        validator: (task) => {
            if (!task.id) return false;
        }
    },
    deleteTask: {
        type: Function,
        required: true
    }
});
</script>
<template>
    <div class="row columns box m-2">
        <div class="column is-1 draggable p-auto m-auto">
            <font-awesome-icon icon="grip-vertical" />
        </div>
        <div class="column is-2 p-auto m-auto">{{ props.task.name }}</div>
        <div class="column is-2 p-auto m-auto">{{ props.task.description }}</div>
        <div class="column is-2 p-auto m-auto">{{ props.task.start }}</div>
        <div class="column is-2 p-auto m-auto">{{ props.task.end }}</div>
        <div class="column is-2 p-auto m-auto">{{ props.task.type }}</div>
        <div class="column is-1 p-auto m-auto">
            <div @click="props.deleteTask(props.task.id)" class="button-delete">
                <font-awesome-icon icon="trash-can" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.draggable {
    cursor: grab;
}
.draggable:active {
    cursor: grabbing;
}
.button-delete:hover{
    cursor: pointer;
}
</style>