import s from "./CatalogCard.module.scss"
import { RootButton } from "$shared/ui/buttons/root"
import { Carousel } from "./carousel/Carousel"
import insertSpaces from "$shared/lib/format/insertSpaces"

type CatalogCardProps = {
  mark: string
  folder: string
  price: number
  images: string[]
  modification: string
}

export const CatalogCard = ({ mark, folder, price, images, modification }: CatalogCardProps) => {
  const name = `${mark} ${folder}`

  return (
    <div className={s.block}>
      <Carousel slides={images} />
      <div className={s.content}>
        <div className={s.info}>
          <h3 className={s.name}>{name}</h3>
          <p>{insertSpaces(String(price))} ₽</p>
          <div className={s.info}>
            <p className={s.modification}>{modification}</p>
          </div>
        </div>
        <div className={s.footer}>
          <RootButton size="sm" className={s.buyButton} colorVariant="var3">
            Купить
          </RootButton>
        </div>
      </div>
    </div>
  )
}
