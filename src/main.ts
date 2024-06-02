import './assets/main.css';
import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import App from './App.vue';
import PrimeVue from 'primevue/config';
import Skeleton from 'primevue/skeleton';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(vue3GoogleLogin, {
    clientId: '425394615016-kkb3agktfs2g7n6tfc7sk5cs2qh008md.apps.googleusercontent.com'
  })
app.component('SkeletonField', Skeleton);

app.mount('#app');
