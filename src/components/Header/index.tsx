import { FC } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import { LinkContainer } from 'react-router-bootstrap'

import avatar from '/avatar.svg'

export const Header: FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Сайт с постами</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Список постов</Nav.Link>
            </LinkContainer>
            <LinkContainer to="about-me">
              <Nav.Link>Обо мне</Nav.Link>
            </LinkContainer>
          </Nav>
          <Navbar.Text>
            <Image
              src={avatar}
              alt="avatar"
              roundedCircle
              width={50}
              height={50}
            />
            <Navbar.Text>
              Карамашев Леонид: <Link to="email:#">someEmail@mail.some</Link>
            </Navbar.Text>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
