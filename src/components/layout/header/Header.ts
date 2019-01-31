import { Component, Prop, Vue } from "vue-property-decorator";

@Component
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
