'use client'

import { usePathname } from 'next/navigation'
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'

export default function MyNavbar() {
  const pathname = usePathname()

  if (pathname.includes('/admin')) return null

  return (
    <Navbar
      bg="white"
      expand="lg"
      fixed="top"
      className="border-bottom shadow-sm custom-navbar-padding"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <div className="logo-text">BARK &amp; BIJOU</div>
          <div className="logo-slogan">LUXURY &amp; LOVE FOR YOUR PUP</div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarMain" />
        <Navbar.Collapse
          id="navbarMain"
          className="justify-content-end d-none d-lg-flex gap-4 align-items-center"
        >
          <Nav className="gap-27 text-uppercase">
            <Nav.Link href="#">首頁</Nav.Link>
            <Nav.Link href="#">最新消息</Nav.Link>
            <Nav.Link href="#">商品</Nav.Link>
            <Nav.Link href="/article">文章</Nav.Link>
            <Nav.Link href="#">寵物保母</Nav.Link>
            <Nav.Link href="#">優惠卷</Nav.Link>
            <Nav.Link href="#">關於我們</Nav.Link>
          </Nav>

          <Button
            variant="light"
            className="burger-btn p-0 border-0 bg-transparent d-flex align-items-center"
          >
            <i className="bi bi-list nav-icon" />
          </Button>

          <Form className="me-3 mb-0 d-flex search-group" role="search">
            <Form.Control type="search" placeholder="搜尋" />
            <Button
              className="search-btn"
              type="submit"
              onClick={(e) => setTimeout(() => e.currentTarget.blur(), 100)}
            >
              <BiSearch style={{ color: '#cc543a' }} />
            </Button>
          </Form>

          <div className="d-flex align-items-center gap-4">
            <a href="#" className="text-dark d-flex align-items-center">
              <i className="bi bi-person nav-icon" />
            </a>
            <a href="#" className="text-dark d-flex align-items-center">
              <i className="bi bi-cart nav-icon" />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
