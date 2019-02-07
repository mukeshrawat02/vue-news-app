import { Component, Prop, Vue } from "vue-property-decorator";

import { Article } from "../../models/news";

@Component
export default class NewsItem extends Vue {
  @Prop() public articles: Article[];
}
