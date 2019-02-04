import { Component, Vue, Prop } from "vue-property-decorator";
import NewsItem from "../news-item/News-Item";

@Component({
  components: {
    NewsItem
  }
})
export default class News extends Vue {
  @Prop() public topic: string | undefined;

  constructor() {
    super();
  }
}
