import "./lu.scss";
import { Plugin } from "vue";
import { ClickOutside } from "./directives/ClickOutside";

// import { default as CollapseTransition } from "./collapse-transition/CollapseTransition.vue";
import { default as Button } from "./button/Button.vue";
import { default as Dialog } from "./dialog/Dialog.vue";
import { openDialog } from "./dialog/openDialog";
import { default as Switch } from "./switch/Switch.vue";
import { default as Tab } from "./tabs/Tab.vue";
import { default as TabPane } from "./tabs/TabPane.vue";
import { default as Menu } from "./menu/Menu.vue";
import { default as MenuGroup } from "./menu/MenuGroup.vue";
import { default as MenuItem } from "./menu/MenuItem.vue";
import { default as SubMenu } from "./menu/SubMenu.vue";
import { default as Drawer } from "./drawer/Drawer.vue";

const components = [
  // CollapseTransition,
  Button,
  Switch,
  Dialog,
  Tab,
  TabPane,
  Menu,
  MenuGroup,
  MenuItem,
  SubMenu,
  Drawer
];
export {
  // CollapseTransition,
  Button,
  Switch,
  Dialog,
  openDialog,
  Tab,
  TabPane,
  Menu,
  MenuGroup,
  MenuItem,
  SubMenu,
  Drawer
};

export const version = "0.0.1";

export const install: Plugin = (app) => {
  app.directive("click-outside", ClickOutside);

  components.forEach((component) => {
    app.component(component.name, component);
  });
};
