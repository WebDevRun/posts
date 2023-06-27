import { ThemeProvider } from 'react-bootstrap'
import { RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'

import './App.css'
import { appRouter } from '../RouterProvider'

export const App = () => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  )
}
