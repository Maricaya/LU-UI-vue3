import Button from './src/main.vue';

// @ts-ignore
Button.install = function(Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
