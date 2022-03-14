<script setup>
const props = defineProps({
    task:Object
});

</script>
<template>
    <div class="columns">
        <div class="column">
            {{props.task.name}}
        </div>
        <div class="column">
            {{props.task.description}}
        </div>
        <div class="column">
            {{props.task.start}}
        </div>
        <div class="column">
            {{props.task.end}}
        </div>
        <div class="column">
            {{props.task.type}}            
        </div>
    </div>
</template>