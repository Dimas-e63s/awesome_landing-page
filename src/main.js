import 'normalize.css';
import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/_functions.scss';
import '@/styles.scss';
import '@/_mixins.scss';
import '@/_variables.scss';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
