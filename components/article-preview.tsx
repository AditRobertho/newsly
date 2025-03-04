import { Article } from "@/types/types"

import ArticleImage from "./ArticleImage"
import ArticleDetails from "./article-details"

export default function ArticlePreview({ article }: { article: Article }) {
  return (
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
  )
}
