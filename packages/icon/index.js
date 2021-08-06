import HlIcon from "./src/index.vue";
import "../../styles/icon.scss";

HlIcon.install = (app) => {
  app.component(HlIcon.name, HlIcon);
};

export default HlIcon;
