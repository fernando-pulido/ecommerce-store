type Route = 'home'

type Path = {
  url: string
  value: string
}

type Urls = Record<Route, Path>

export const URL_CONST: Urls = {
  home: { url: '/home', value: 'Home' },
}
