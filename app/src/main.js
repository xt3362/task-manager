//for vue3
import { createApp } from 'vue'
import App from './App.vue'
//for font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//modal
import 'vue-universal-modal/dist/index.css'
import VueUniversalModal from 'vue-universal-modal'
//vue-select
import vSelect from 'vue-select'
//v-calendar
import VCalendar from 'v-calendar';

// Use plugin with defaults

let app = createApp(App);

app.use(VCalendar, {})

app.component('v-select', vSelect)

library.add(fas);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(VueUniversalModal, {
    teleportTarget: '#modals'
});
app.mount('#app');
