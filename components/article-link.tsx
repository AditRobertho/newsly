"use client"

import { ReactNode } from "react"
import Link from "next/link"

import { Article } from "@/types/types"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import ArticleImage from "./ArticleImage"
import { Paragraph } from "./ui/typography"

export default function ArticleLink({
  article,
  children,
}: {
  article: Article
  children: ReactNode
}) {
  return (
    <Sheet>
      <SheetTrigger className="text-left hover:text-orange-700">
        {children}
      </SheetTrigger>
      <SheetContent className="grid gap-4 pt-16">
        <SheetHeader>
          <SheetTitle className="text-xl">{article.title}</SheetTitle>
          <SheetDescription>{article.description}</SheetDescription>
        </SheetHeader>
        <div>
          <ArticleImage
            src={article.urlToImage}
            title={article.title}
            ratio="tall"
          />
          <Paragraph>{article.content}</Paragraph>
        </div>
      </SheetContent>
      <SheetFooter>
        <Link href={article.url} className="underline">
          Read more
        </Link>
      </SheetFooter>
    </Sheet>
  )
}
