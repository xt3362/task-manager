<script setup>
const props = defineProps({
    task: Object
});

</script>
<template>
    <div class="columns box m-2">
        <div class="column is-1 draggable p-auto m-auto">
            <font-awesome-icon icon="grip-vertical" />
        </div>
        <div class="column is-2 p-auto m-auto">{{ props.task.name }}</div>
        <div class="column is-2 p-auto m-auto">{{ props.task.description }}</div>
        <div class="column is-2 p-auto m-auto">{{ props.task.start }}</div>
        <div class="column is-2 p-auto m-auto">{{ props.task.end }}</div>
        <div class="column is-2 p-auto m-auto">{{ props.task.type }}</div>
    </div>
</template>
<style scoped>
.draggable:hover{
    cursor: pointer;
}
</style>