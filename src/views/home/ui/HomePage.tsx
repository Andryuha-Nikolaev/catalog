import { ContentLayout } from "$shared/layouts/content-layout"

type HomePageProps = {
  children: React.ReactNode
}

export const HomePage = ({ children }: HomePageProps) => {
  return <ContentLayout>{children}</ContentLayout>
}
