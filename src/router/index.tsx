import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '../layouts/MainLayout'
import { Main } from '../pages/Main'
import { AboutMe } from '../pages/AboutMe'
import { AboutUser } from '../pages/AboutUser'

export const appRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'about-me',
        element: <AboutMe />,
      },
      {
        path: 'about-user',
        element: <AboutUser />,
      },
    ],
  },
])
