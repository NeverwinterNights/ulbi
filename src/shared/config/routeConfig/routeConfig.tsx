import { RouteProps } from 'react-router-dom'

import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFound } from 'pages/NotFoundPage'

export enum AppRoutes {
  ABOUT = 'about',
  MAIN = 'main',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.MAIN]: '/',
  [AppRoutes.NOT_FOUND]: '*', // any unregistered page
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ABOUT]: { element: <AboutPage />, path: RoutePath.about },
  [AppRoutes.MAIN]: { element: <MainPage />, path: RoutePath.main },
  [AppRoutes.NOT_FOUND]: { element: <NotFound />, path: RoutePath.not_found },
}
