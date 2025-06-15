import { Catalog, getCars } from "$features/catalog"
import { SearchParamsNames } from "$shared/constants/searchParamsNames"
import { HomePage } from "$views/home"
import { ReadonlyURLSearchParams } from "next/navigation"

type HomePageProps = {
  searchParams: Promise<ReadonlyURLSearchParams>
}

export default async function Home({ searchParams }: HomePageProps) {
  const sp = await searchParams

  const currentSearchParams = new URLSearchParams(sp)

  const page = currentSearchParams.get(SearchParamsNames.PAGE)

  if (!page) {
    currentSearchParams.set(SearchParamsNames.PAGE, "1")
  }

  currentSearchParams.set(SearchParamsNames.LIMIT, "12")

  const queryString = String(currentSearchParams)

  const data = await getCars(queryString)

  return (
    <HomePage>
      <Catalog data={data} />
    </HomePage>
  )
}
