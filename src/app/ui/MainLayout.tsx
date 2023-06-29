import { Outlet, ScrollRestoration } from 'react-router-dom'

import { Header } from '../../widgets'
import { Container } from 'react-bootstrap'

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="flex-grow-1">
        <Container>
          <Outlet />
        </Container>
      </main>
      <ScrollRestoration />
    </>
  )
}
