import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'

import avatar from '/avatar.svg'

export const Header: FC = () => {
  return (
    <Navbar bg="light" expand="md">
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
          <Navbar.Text className="d-flex gap-2 align-items-start align-items-md-center me-auto me-md-0">
            <Image
              src={avatar}
              alt="avatar"
              roundedCircle
              width={40}
              height={40}
            />
            <div className="d-flex flex-column">
              <span>Карамашев Леонид</span>
              <Link to="#" className="nav-link">
                someEmail@mail.some
              </Link>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
