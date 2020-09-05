import './lib';
import './site/index.scss';
import {createApp} from 'vue';
import App from './site/App.vue';
import {router} from './site/router';

const app = createApp(App);
app.use(router);
app.mount('#app');
