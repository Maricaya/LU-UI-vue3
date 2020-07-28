import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';

// 内存型路由、hash 路由、history 路由
const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc}
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
