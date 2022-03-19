<script setup>
const props = defineProps({
    confirmEvent:{
        type: Function,
        required: false
    },
    showModal:{
        type: Function,
        required: true
    },
    hideModal:{
        type: Function,
        required: true
    },
    isShow: {
        type: Boolean,
        required: true
    }
});
const confirm = () => {
    props.confirmEvent();
    props.hideModal();
};
</script>
<template>
    <Modal v-model="props.isShow" :close="hideModal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    <slot name="title"></slot>
                </p>
                <button class="delete" aria-label="close" @click="props.hideModal"></button>
            </header>
            <section class="modal-card-body">
                <slot name="content"></slot>
            </section>
            <footer class="modal-card-foot">
                <button v-if="confirmEvent != undefined" class="button is-success" @click="confirm">Confirm</button>
                <button class="button" @click="props.hideModal">Cancel</button>
            </footer>
        </div>
    </Modal>
</template>