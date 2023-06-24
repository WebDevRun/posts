import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from './MainLayout'
import { SuspenseWrapper } from '../shared'

const MainPage = lazy(async () => {
  const module = await import('../pages')
  return { default: module.Main }
})

const AboutMePage = lazy(async () => {
  const module = await import('../pages')
  return { default: module.AboutMe }
})

const AboutUserPage = lazy(async () => {
  const module = await import('../pages')
  return { default: module.AboutUser }
})

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <MainPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'about-me',
        element: (
          <SuspenseWrapper>
            <AboutMePage />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'about-user',
        element: (
          <SuspenseWrapper>
            <AboutUserPage />
          </SuspenseWrapper>
        ),
      },
    ],
  },
])
