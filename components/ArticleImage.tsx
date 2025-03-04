"use client"

import Image from "next/image"

import { AspectRatio } from "./ui/aspect-ratio"

export default function ArticleImage({
  title,
  src,
  ratio,
}: {
  title: string
  src: string
  ratio: "tall" | "wide"
}) {
  return (
    <AspectRatio ratio={ratio === "tall" ? 4 / 3 : 16 / 9}>
      <Image src={src} alt={title} fill className="object-cover md:rounded" />
    </AspectRatio>
  )
}
