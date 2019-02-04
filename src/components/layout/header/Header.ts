import { Component, Prop, Vue } from "vue-property-decorator";
import Menu from "../menu/Menu";

@Component({
  components: {
    Menu
  }
})
export default class Header extends Vue {}
