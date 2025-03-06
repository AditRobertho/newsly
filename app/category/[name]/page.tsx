import { Category } from "@/types/types"
import { fetchHeadlines } from "@/lib/news-api"
import { NewsPage } from "@/components/newspage"

export default async function CategoryPage({
  params: { name },
}: {
  params: { name: Category }
}) {
  const headlines = await fetchHeadlines({ category: name })

  return <NewsPage articles={headlines} />
}
