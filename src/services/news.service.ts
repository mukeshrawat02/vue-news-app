import axios from "axios";

import { NewsDto } from "../models/news";
import config from "../config";

class NewsService {

  public async getTopicHeadlines(topic: string): Promise<NewsDto> {
    const key = config.newsApiKey;
    const url = `${config.newsApiUrl}?q=${topic}&apiKey=${key}`;

    return await axios.get<NewsDto>(url);
  }
}

export const newsService = new NewsService();
