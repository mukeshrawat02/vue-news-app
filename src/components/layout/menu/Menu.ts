import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Menu extends Vue {
  @Prop() public name!: string;
}
