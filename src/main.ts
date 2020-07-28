import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import Monica from './components/Monica.vue';
import Monica2 from './components/Monica.vue2';
// 内存型路由、hash 路由、history 路由
const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Monica},
    {path: '/a', component: Monica2}
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
