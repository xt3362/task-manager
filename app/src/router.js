//vue-router
import {createRouter, createWebHashHistory} from 'vue-router';
//any component
import MainPage from './components/pages/MainPage.vue';
import TaskRegister from './components/pages/TaskRegistor.vue';
// Use plugin with defaults
const routes = [
    { path: '/', component: MainPage },
    { path: '/register', component: TaskRegister },
];
export default createRouter({
    history: createWebHashHistory(),
    routes: routes
});
