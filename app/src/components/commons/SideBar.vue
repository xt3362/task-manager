<script setup>
import { ref } from 'vue';
import { MainContentType } from '../../models/MainContentType';
const emits = defineEmits(['toggleContent']);
const activeContentType = ref(MainContentType.Home);
const toggleContent = (value) => {
    activeContentType.value = value; 
};
</script>
<template>
    <aside class="column is-2 is-fullheight section has-background-dark">
        <p class="menu-label has-text-white">Navigation</p>
        <ul class="menu-list">
            <li>
                <a
                    href="#"
                    :class="{ 'is-active': activeContentType == MainContentType.Home }"
                    @click="changeActiveLink(MainContentType.Home)"
                >
                    <span class="icon">
                        <i class="fa fa-home"></i>
                    </span> ホーム
                </a>
            </li>
            <li>
                <a
                    href="#"
                    :class="{ 'is-active': activeContentType == MainContentType.TaskRegistor }"
                    @click="changeActiveLink(MainContentType.TaskRegistor)"
                >
                    <span class="icon">
                        <i class="fa fa-book"></i>
                    </span> タスク登録
                </a>
                <ul>
                    <li>
                        <a
                            href="#"
                            :class="{ 'is-active': activeContentType == MainContentType.Daily }"
                            @click="changeActiveLink(MainContentType.Daily)"
                        >
                            <span class="icon is-small">
                                <i class="fa fa-link"></i>
                            </span> 日毎
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            :class="{ 'is-active': activeContentType == MainContentType.Weekly }"
                            @click="changeActiveLink(MainContentType.Weekly)"
                        >
                            <span class="icon is-small">
                                <i class="fa fa-link"></i>
                            </span> 週毎
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            :class="{ 'is-active': activeContentType == MainContentType.Monthly }"
                            @click="changeActiveLink(MainContentType.Monthly)"
                        >
                            <span class="icon is-small">
                                <i class="fa fa-link"></i>
                            </span> 月毎
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </aside>
</template>