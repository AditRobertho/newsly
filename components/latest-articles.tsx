import { Article } from "@/types/types"

import ArticleDetails from "./article-details"
import { H2 } from "./ui/typography"

export default function LatestArticles({
  articles,
}: {
  articles: Array<Article>
}) {
  return (
    <div className="lg:max-w-s flex h-full flex-col gap-4 px-4 lg:p-0">
      <H2 className="border-none text-4xl font-bold uppercase text-orange-700 ">
        Latest Stories
      </H2>
      {articles.map((article) => (
        <ArticleDetails key={article.title} article={article} />
      ))}
    </div>
  )
}
