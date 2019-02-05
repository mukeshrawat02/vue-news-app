import axios from "axios";

import { NewsDTO } from "../models/news";
import config from "../config";

class NewsService {
  public async getTopicHeadlines(topic: string) {
    const key = config.newsApiKey;
    const url = `${config.newsApiUrl}?q=${topic}&apiKey=${key}`;

    return await axios.get<NewsDTO[]>(url);
  }
}

export const newsService = new NewsService();
