import { Article, Category } from "@/types/types"

export const fetchHeadlines = async ({
  category,
}: {
  category?: Category
}): Promise<Array<Article>> => {
  // get request from API
  const request = await fetch(
    `${process.env.NEWS_API_URL}/top-headlines?apiKey=${
      process.env.NEWS_API_KEYS
    }&country=us${category ? `&category=${category}` : ""}`
  )

  const articles = (await request.json()) as { articles: Array<Article> }

  return articles.articles.filter(
    ({ title, urlToImage }) => title !== "[Removed]" && urlToImage
  )
}
