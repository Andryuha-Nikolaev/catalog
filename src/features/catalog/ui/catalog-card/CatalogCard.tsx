import Image from "next/image"
import s from "./CatalogCard.module.scss"

type CatalogCardProps = {
  mark: string
  folder: string
  price: number
  image: string
}

export const CatalogCard = ({ mark, folder, price, image }: CatalogCardProps) => {
  const name = `${mark} ${folder}`

  return (
    <div className={s.block}>
      <Image width={1600} height={1200} src={image} alt={name} className={s.image} sizes="600px" />
      <div className={s.info}>
        <h4>{name}</h4>
        <p>{price} ₽</p>
      </div>
    </div>
  )
}
