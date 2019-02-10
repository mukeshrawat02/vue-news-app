export const prefix = "/";

export default {
  newsApiKey: "---your key---------",
  newsApiUrl: "https://newsapi.org/v2/top-headlines",
  menuOptions: [
    {
      name: "World",
      path: `${prefix}news/world`
    },
    {
      name: "UK",
      path: `${prefix}news/uk`
    },
    {
      name: "Design",
      path: `${prefix}news/design`
    },
    {
      name: "Technology",
      path: `${prefix}news/technology`
    },
    {
      name: "Culture",
      path: `${prefix}news/culture`
    },
    {
      name: "Business",
      path: `${prefix}news/business`
    },
    {
      name: "Politics",
      path: `${prefix}news/politics`
    },
    {
      name: "Opinion",
      path: `${prefix}news/opinion`
    },
    {
      name: "Science",
      path: `${prefix}news/science`
    },
    {
      name: "Health",
      path: `${prefix}news/health`
    },
    {
      name: "Style",
      path: `${prefix}news/style`
    },
    {
      name: "Travel",
      path: `${prefix}news/travel`
    }
  ]
};
