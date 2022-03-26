<script setup>
import { ref, watch, watchEffect } from 'vue';
import { IntervalType } from '../../models/Constant';
const selected = ref(0);
const selectItems = [
    { label: "日毎", value: IntervalType.Daily },
    { label: "週毎", value: IntervalType.Weekly },
    { label: "月毎", value: IntervalType.Monthly },
    { label: "年毎", value: IntervalType.EveryYear },
];
const emits = defineEmits(['selectEvent']);
const selectInterval = (value) =>{
    emits('selectEvent', value);
}
watch(selected, () =>{
    selectInterval(selected.value);
});
</script>
<template>
    <!-- <v-select :v-model="selected" label="label" :options="selectItems" @update:modelValue="selectInterval" /> -->
    <template v-for="item in selectItems">
        <input type="radio" :id="item.value" :value="item.value" v-model="selected">
        <label :for="item.value" class="label-radio">{{item.label}}</label>
    </template>
</template>
<style scoped>
.label-radio{
    margin-right: 20px;
}
</style>