import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './Demos/SwitchDemo.vue';
import ButtonDemo from './Demos/ButtonDemo.vue';
import DialogDemo from './Demos/DialogDemo.vue';
import TabsDemo from './Demos/TabsDemo.vue';
import MenuDemo from './Demos/MenuDemo.vue';
import DrawerDemo from './Demos/DrawerDemo.vue';
import Markdown from '../site/components/Markdown.vue';
import {h} from 'vue';

// 内存型路由、hash 路由、history 路由
const history = createWebHashHistory();
const md = filename => h(Markdown, {path: `../markdown/${filename}.md`, key: filename})

export const router = createRouter({
  history,
  routes: [
    {path: '/', redirect: "/doc"},
    {path: '/home', component: Home},
    {path: '/doc', component: Doc, children: [
        {path: 'intro', component: md('intro')},
        {path: 'getStarted', component: md('getStarted')},
        {path: 'install', component: md('install')},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'menu', component: MenuDemo},
        {path: 'drawer', component: DrawerDemo},
      ]}
  ]
});

