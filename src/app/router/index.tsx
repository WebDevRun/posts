import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '../ui/MainLayout'
import { withSuspense } from '../../shared'
import { Loader } from '../../shared/ui/Loader'

const MainPage = lazy(() =>
  import('../../pages').then((module) => ({ default: module.Main }))
)
const AboutMePage = lazy(() =>
  import('../../pages').then((module) => ({ default: module.AboutMe }))
)
const AboutUserPage = lazy(() =>
  import('../../pages').then((module) => ({ default: module.AboutUser }))
)

export const appRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: withSuspense(<MainPage />, <Loader />),
      },
      {
        path: 'about-me',
        element: withSuspense(<AboutMePage />, <Loader />),
      },
      {
        path: 'about-user',
        element: withSuspense(<AboutUserPage />, <Loader />),
      },
    ],
  },
])
