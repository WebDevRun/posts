import { Suspense, lazy } from 'react'
import { ScrollRestoration, createBrowserRouter } from 'react-router-dom'

import { MainLayout } from './MainLayout'

const MainPage = lazy(async () => {
  const module = await import('../../pages')
  return { default: module.Main }
})

const AboutMePage = lazy(async () => {
  const module = await import('../../pages')
  return { default: module.AboutMe }
})

const AboutUserPage = lazy(async () => {
  const module = await import('../../pages')
  return { default: module.AboutUser }
})

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <MainLayout />
        <ScrollRestoration />
      </>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: 'about-me',
        element: (
          <Suspense>
            <AboutMePage />
          </Suspense>
        ),
      },
      {
        path: 'about-user/:id',
        element: (
          <Suspense>
            <AboutUserPage />
          </Suspense>
        ),
      },
    ],
  },
])
