import "./styles/index.scss"

import type { Metadata, Viewport } from "next"
import NextTopLoader from "nextjs-toploader"

import { primaryFont } from "./fonts"

import "swiper/css"
import "swiper/css/pagination"

import metaConstants from "$shared/constants/meta"
import siteConstants from "$shared/constants/site"
import viewportConstants from "$shared/constants/viewport"

export const metadata: Metadata = metaConstants

export const viewport: Viewport = viewportConstants

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={primaryFont.variable}>
        <NextTopLoader color={siteConstants.PROGRESS_BAR_COLOR} showSpinner={false} />
        <main>{children}</main>
      </body>
    </html>
  )
}
