import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
// 内存型路由、hash 路由、history 路由
const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc, children: [
        {path: 'switch', component: SwitchDemo}
      ]}
  ]
});
router.afterEach(() => {
  console.log("路由切换了");
});

