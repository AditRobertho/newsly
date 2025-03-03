"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Categories } from "./categories"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"
import { H1 } from "./ui/typography"

export function SiteHeader() {
  return (
    <header className="flex w-full flex-col items-center justify-between md:flex-row pt-8 pb-4 px-8 border-b">
      <H1 className="uppercase text-orange-700 lg:text-6xl">
        <Link href="/">{siteConfig.name}. </Link>
      </H1>
      <ScrollArea className="whitespace-nowrap">
        <Categories />
        <ScrollBar orientation="horizontal" className="md:hidden" />
      </ScrollArea>
    </header>
  )
}
