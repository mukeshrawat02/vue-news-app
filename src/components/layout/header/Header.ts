import { Component, Prop, Vue } from "vue-property-decorator";
import Menu from "../menu/Menu";

@Component({
  components: {
    Menu
  }
})
export default class Header extends Vue {
  @Prop() public name!: string;
  public enthusiasm: number = 1;

  public increment() {
    this.enthusiasm++;
  }

  public decrement() {
    if (this.enthusiasm > 1) {
      this.enthusiasm--;
    }
  }
}
