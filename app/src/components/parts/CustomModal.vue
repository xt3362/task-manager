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
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    <slot name="title"></slot>
                </p>
                <button class="delete" aria-label="close" @click="closeModal"></button>
            </header>
            <section class="modal-card-body">
                <slot name="content"></slot>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button">Cancel</button>
            </footer>
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