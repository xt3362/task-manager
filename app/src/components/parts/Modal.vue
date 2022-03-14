<script setup>
import { ref } from 'vue';
const isShow = ref(false)

const showModal = () => {
    isShow.value = true
};
const closeModal = () => {
    isShow.value = false
};
</script>
<template>
    <p>
        <button @click="showModal">Show modal</button>
    </p>
    <Modal v-model="isShow" :close="closeModal">
        <div class="myModal">
            <p>Hello</p>
            <button @click="closeModal">close</button>
        </div>
    </Modal>
</template>
<style scoped lang="scss">
.myModal {
    width: 300px;
    padding: 30px;
    box-sizing: border-box;
    background-color: #fff;
    font-size: 20px;
    text-align: center;
}
</style>