<script setup>
import { ref, watchEffect } from 'vue';
import { IntervalType } from '../../models/Constant';
const selected = ref(0);
const selectItems = [
    { label: "日毎", value: IntervalType.Daily },
    { label: "週毎", value: IntervalType.Weekly },
    { label: "月毎", value: IntervalType.Monthly },
    { label: "年毎", value: IntervalType.EveryYear },
];
const emits = defineEmits(['selectEvent']);
const selectInterval = (item) =>{
    emits('selectEvent', item.value);
}
</script>
<template>
    <v-select :v-model="selected" label="label" :options="selectItems" @update:modelValue="selectInterval" />
</template>