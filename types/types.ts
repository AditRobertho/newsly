export type Article = {
  source: {
    name: string
  }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export type Category =
  | "general"
  | "business"
  | "entertaiment"
  | "health"
  | "science"
  | "sports"
  | "technology"
