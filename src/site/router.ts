import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Intro from './views/Intro.vue';
import GetStarted from './views/GetStarted.vue';
import Install from './views/Install.vue';
import SwitchDemo from './Demos/SwitchDemo.vue';
import ButtonDemo from './Demos/ButtonDemo.vue';
import DialogDemo from './Demos/DialogDemo.vue';
import TabsDemo from './Demos/TabsDemo.vue';
import MenuDemo from './Demos/MenuDemo.vue';
import DrawerDemo from './Demos/DrawerDemo.vue';

// 内存型路由、hash 路由、history 路由
const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {path: '/', redirect: "/doc"},
    {path: '/home', component: Home},
    {path: '/doc', component: Doc, children: [
        {path: 'intro', component: Intro},
        {path: 'getStarted', component: GetStarted},
        {path: 'install', component: Install},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'menu', component: MenuDemo},
        {path: 'drawer', component: DrawerDemo},
      ]}
  ]
});

