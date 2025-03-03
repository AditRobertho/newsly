import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function IndexPage() {
  return (
    <section className="mx-auto mt-8 max-w-xl ">
      <Card className="p-4">
        <h1 className="text-lg ">Hello world</h1>
      </Card>
    </section>
  )
}
