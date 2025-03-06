import { fetchHeadlines } from "@/lib/news-api"
import ArticlePreview from "@/components/article-preview"
import LatestArticles from "@/components/latest-articles"
import { NewsPage } from "@/components/newspage"
import TopHeadline from "@/components/top-headline"

export default async function IndexPage() {
  const articles = await fetchHeadlines({ category: "general" })

  return <NewsPage articles={articles} />
}
