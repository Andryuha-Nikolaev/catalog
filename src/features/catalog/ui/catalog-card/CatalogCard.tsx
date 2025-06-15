import Image from "next/image"
import s from "./CatalogCard.module.scss"
import { RootButton } from "$shared/ui/buttons/root"

type CatalogCardProps = {
  mark: string
  folder: string
  price: number
  image: string
  modification: string
}

export const CatalogCard = ({ mark, folder, price, image, modification }: CatalogCardProps) => {
  const name = `${mark} ${folder}`

  return (
    <div className={s.block}>
      <Image width={1600} height={1200} src={image} alt={name} className={s.image} sizes="600px" />
      <div className={s.content}>
        <div className={s.info}>
          <h3 className={s.name}>{name}</h3>
          <p>{price} ₽</p>
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
