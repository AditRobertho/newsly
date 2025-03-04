import Image from "next/image"
import dayjs from "dayjs"

import { Article } from "@/types/types"

import ArticleImage from "./ArticleImage"
import { Card } from "./ui/card"
import { H1, Lead } from "./ui/typography"

export default function TopHeadline({ article }: { article: Article }) {
  return (
    <Card className="p-4">
      <div className="grid w-full grid-rows-1 items-start gap-4 md:grid-cols-[0.35fr_0.65fr] md:gap-8">
        <div className="relative w-full md:h-full">
          <ArticleImage
            src={article.urlToImage}
            title={article.title}
            ratio="tall"
          />
        </div>
        <div className="flex w-full flex-col gap-4 px-4 lg:px-0">
          <H1>{article.title}</H1>
          <span className="block text-sm text-orange-700 md:text-base">
            {article.author} | {dayjs(article.publishedAt).format("HH:mm")}
          </span>
          <Lead>{article.description}</Lead>
        </div>
      </div>
    </Card>
  )
}
