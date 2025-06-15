import type { Metadata } from "next"

const SITE_NAME = "Cars"

const metaConstants: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Description",
  icons: {
    icon: "/favicon.ico",
  },
}

export default metaConstants
