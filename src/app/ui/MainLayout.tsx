import { Outlet } from 'react-router-dom'

import { Header } from '../../widgets'

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
