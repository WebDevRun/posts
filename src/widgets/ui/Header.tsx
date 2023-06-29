import { NavLink } from 'react-router-dom'
import { Stack, Container, Nav, Navbar, Image } from 'react-bootstrap'

import avatar from '/avatar.svg'

export const Header = () => {
  return (
    <Navbar expand="md" sticky="top" bg="light gradient">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="h1 mb-0">
          Сайт с постами
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-2 mb-md-0">
            <Nav.Link as={NavLink} to="/">
              Список постов
            </Nav.Link>
            <Nav.Link as={NavLink} to="about-me">
              Обо мне
            </Nav.Link>
          </Nav>
          <Stack gap={2} direction="horizontal">
            <Image
              src={avatar}
              alt="avatar"
              roundedCircle
              width={40}
              height={40}
            />
            <Stack>
              <span>Карамашев Леонид</span>
              <a href="#" className="nav-link">
                someEmail@mail.some
              </a>
            </Stack>
          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
