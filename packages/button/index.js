import HlButton from "./src/index.vue";
import "../../styles/button.scss";
// 如果是 ts 需要单独给 install 定义类型
HlButton.install = (app) => {
  app.component(HlButton.name, HlButton);
};
export default HlButton;
