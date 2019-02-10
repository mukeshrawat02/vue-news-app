import { Component, Prop, Vue } from "vue-property-decorator";

import config from "../../../config";
@Component
export default class Menu extends Vue {
  @Prop() public name!: string;
  public menuItems = config.menuOptions;
}
