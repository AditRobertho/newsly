import { fetchHeadlines } from "@/lib/news-api"
import ArticlePreview from "@/components/article-preview"
import LatestArticles from "@/components/latest-articles"
import TopHeadline from "@/components/top-headline"

export default async function IndexPage() {
  const articles = await fetchHeadlines({ category: "business" })
  console.log(articles)

  return (
    <div className="flex flex-col gap-16">
      <TopHeadline article={articles[0]} />
      <div className="grid gap-8 lg:grid-cols-[0.3fr_0.7fr]">
        <LatestArticles articles={articles.slice(1, 4)} />
        <div className="flex flex-col gap-8 px-4 lg:px-0">
          {articles.slice(5, 8)?.map((article) => (
            <ArticlePreview key={article.title} article={article} />
          ))}
        </div>
      </div>
    </div>
  )
}
