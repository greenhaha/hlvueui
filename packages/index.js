import HlButton from "./button";
import HlIcon from "./icon";
import DIcon from "./icon1";
import "../styles/index.scss";
const components = [HlButton, HlIcon];

const defaultInstallOpt = {
  size: "medium",
  zIndex: 2000,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const install = (app, options = {}) => {
  components.forEach((item) => {
    app.component(item.name, item);
  });
  // 全局注册默认数据
  app.config.globalProperties.$HLYM = Object.assign(
    {},
    defaultInstallOpt,
    options
  );
};

export default {
  version: "1.0.0",
  install,
};

export { HlButton, HlIcon };
