<script setup>
import TaskMasterModel from '../../models/TaskMasterModel';

const props = defineProps({
    task: {
        type: Object,
        required: true
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
            <button @click="props.deleteTask(props.task.id)" class="button">×</button>
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
</style>