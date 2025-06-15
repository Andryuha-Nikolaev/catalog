"use client"

import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import s from "./Carousel.module.scss"
import Image from "next/image"
import clsx from "clsx"

const LOOP = true

type CarouselProps = {
  slides: string[]
}

export const Carousel = ({ slides }: CarouselProps) => {
  return (
    <Swiper
      spaceBetween={20}
      modules={[Pagination]}
      pagination={{ bulletClass: clsx("swiper-pagination-bullet", s.bullet) }}
      grabCursor
      loop={LOOP}
      className={s.swiper}
    >
      {slides.map((item) => (
        <SwiperSlide key={item}>
          <Image width={1600} height={1200} src={item} alt="" className={s.image} sizes="600px" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
