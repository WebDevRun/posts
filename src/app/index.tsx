import { FC } from 'react'
import { ThemeProvider } from 'react-bootstrap'
import { RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import { appRouter } from '../router'

export const App: FC = () => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  )
}
