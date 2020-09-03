import "./index.scss";
import { Plugin } from "vue";
// import { ClickOutside } from "./directives/ClickOutside";

import { default as Button } from "./button/Button.vue";
import { default as Switch } from "./switch/Switch.vue";
import { default as Tabs } from "./tabs/Tabs.vue";
import { default as TabPane } from "./tabs/Tabs.vue";
import { default as Menu } from "./menu/Menu.vue";
import { default as MenuGroup } from "./menu/MenuGroup.vue";
import { default as MenuItem } from "./menu/MenuItem.vue";
import { default as SubMenu } from "./menu/SubMenu.vue";

const components = [
  Button,
  Switch,
  Tabs,
  TabPane,
  Menu,
  MenuGroup,
  MenuItem,
  SubMenu,
];

export {
  Button,
  Switch,
  Tabs,
  TabPane,
  Menu,
  MenuGroup,
  MenuItem,
  SubMenu,
};

export const version = "0.0.1";

export const index: Plugin = (app) => {
  // app.directive("click-outside", ClickOutside);

  components.forEach((component) => {
    app.component(component.name, component);
  });
};
