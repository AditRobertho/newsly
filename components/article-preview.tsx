import { Article } from "@/types/types"

import ArticleImage from "./ArticleImage"
import ArticleDetails, { ArticleDetailsSekeleton } from "./article-details"
import ArticleLink from "./article-link"
import { Skeleton } from "./ui/skeleton"

export default function ArticlePreview({ article }: { article: Article }) {
  return (
    <ArticleLink article={article}>
      <div className="flex gap-4">
        <div className="relative w-full rounded">
          {article?.urlToImage ? (
            <ArticleImage
              src={article.urlToImage}
              title={article.title}
              ratio="wide"
            />
          ) : null}
        </div>
        <div className="max-w-sm">
          <ArticleDetails article={article} />
        </div>
      </div>
    </ArticleLink>
  )
}
export function ArticlePreviewSkeleton() {
  return (
    <div className="flex gap-4">
      <Skeleton className="h-56 w-[36rem]" />
      <div className="w-full">
        <ArticleDetailsSekeleton />
      </div>
    </div>
  )
}
