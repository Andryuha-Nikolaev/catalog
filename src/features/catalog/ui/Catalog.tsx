import { OptionType, SortSelect } from "$entities/sort-select"
import { SearchParamsNames } from "$shared/constants/searchParamsNames"
import { PagePagination } from "$shared/ui/pagination"
import { CarsResponseType } from "../model/types"
import { CatalogCard } from "./catalog-card/CatalogCard"
import s from "./Catalog.module.scss"

type CatalogProps = {
  data: CarsResponseType
}

const sortOptions: OptionType[] = [
  {
    value: `${SearchParamsNames.SORT}=price&${SearchParamsNames.ORDER}=asc`,
    sort: "price",
    order: "asc",
    label: "цена по возрастанию",
  },
  {
    value: `${SearchParamsNames.SORT}=price&${SearchParamsNames.ORDER}=desc`,
    sort: "price",
    order: "desc",
    label: "цена по убыванию",
  },
  {
    value: "",
    sort: "",
    order: "",
    label: "сортировка по умолчанию",
  },
]

export const Catalog = ({ data: { data, meta } }: CatalogProps) => {
  return (
    <div className={s.block}>
      {!data.length && <h3>Ничего не найдено</h3>}
      {!!data.length && (
        <>
          <div className={s.sort}>
            <SortSelect options={sortOptions} />
          </div>

          <div className={s.list}>
            {data.map(({ unique_id, mark_id, folder_id, price, images, modification_id }) => (
              <CatalogCard
                key={unique_id}
                mark={mark_id}
                folder={folder_id}
                price={price}
                image={images.image[0]}
                modification={modification_id}
              />
            ))}
          </div>

          <div className={s.pagination}>
            <PagePagination totalPages={meta.last_page} />
          </div>
        </>
      )}
    </div>
  )
}
