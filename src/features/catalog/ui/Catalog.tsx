import { CarsResponseType } from "../model/types"
import { CatalogCard } from "./catalog-card/CatalogCard"
import s from "./Catalog.module.scss"

type CatalogProps = {
  data: CarsResponseType
}

export const Catalog = ({ data: { data } }: CatalogProps) => {
  return (
    <div className={s.block}>
      {!data.length && <h3>Ничего не найдено</h3>}
      {!!data.length &&
        data.map(({ unique_id, mark_id, folder_id, price, images }) => (
          <CatalogCard
            key={unique_id}
            mark={mark_id}
            folder={folder_id}
            price={price}
            image={images.image[0]}
          />
        ))}
    </div>
  )
}
