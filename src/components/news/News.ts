import { Component, Vue, Prop, Watch } from "vue-property-decorator";

import NewsItem from "../news-item/News-Item";
import { newsService } from "../../services/news.service";
import { NewsDto, Article } from "../../models/news";

@Component({
  components: {
    NewsItem
  }
})
export default class News extends Vue {
  @Prop() public topic: string;
  selectedNews: Article | null = null;
  articles: Article[] = [];

  constructor() {
    super();
    this.getNews();
  }

  @Watch("topic") onRouteChange(currentValue: string, oldValue: string) {
    if (currentValue !== oldValue) {
      this.getNews();
    }
  }

  async getNews() {
    await newsService
      .getTopicHeadlines(this.topic)
      .then((response: any) => {
        this.articles = response.data.articles;
      })
      .catch(err => console.log(err));
  }
}
