import { Article } from "@/types/types"
import ArticlePreview, {
  ArticlePreviewSkeleton,
} from "@/components/article-preview"
import LatestArticles, {
  LatestArticlesSkeleton,
} from "@/components/latest-articles"
import TopHeadline, { TopHeadlineSkeleton } from "@/components/top-headline"

export function NewsPage({ articles }: { articles: Array<Article> }) {
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

export const NewsPageSkeleton = () => (
  <div className="flex flex-col gap-16">
    <TopHeadlineSkeleton />
    <div className="grid gap-8 lg:grid-cols-[0.3fr_0.7fr]">
      <LatestArticlesSkeleton />
      <div className="flex flex-col gap-8 px-4 lg:px-0">
        <ArticlePreviewSkeleton />
        <ArticlePreviewSkeleton />
        <ArticlePreviewSkeleton />
      </div>
    </div>
  </div>
)
