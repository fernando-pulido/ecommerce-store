type Routes = {
  text: string
  url: string
}

type BasicRoutes = 'Home'

export const ROUTES: Record<BasicRoutes, Routes> = {
  Home: {
    text: 'ApoloGym',
    url: '/',
  },
}
