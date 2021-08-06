// 导入组件
import LzButton from "./components/LzButton";
import LzInput from "./components/LzInput";
import LzDialog from "./components/LzDialog/index";
import LzSelect from "./components/LzSelect"

const components = [
  LzButton,
  LzInput,
  LzDialog,
  LzSelect
];

const install = function (Vue) {
  // 开始注册组件
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  ...components
};
