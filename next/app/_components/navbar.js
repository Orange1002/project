'use client'

import { usePathname } from 'next/navigation'
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'
import Link from 'next/link'

const navItems = [
  { href: '/', label: '首頁' },
  { href: '/product', label: '商品' },
  { href: '/article', label: '文章' },
  { href: '/sitter', label: '寵物保母' },
  { href: '/coupon', label: '優惠卷' },
  { href: '/about', label: '關於我們' },
]

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
        <Navbar.Brand>
          <Link href="/" className="text-decoration-none text-dark">
            <div className="logo-text">BARK &amp; BIJOU</div>
            <div className="logo-slogan">LUXURY &amp; LOVE FOR YOUR PUP</div>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarMain" />
        <Navbar.Collapse
          id="navbarMain"
          className="justify-content-end d-none d-lg-flex gap-4 align-items-center"
        >
          <Nav className="gap-27 text-uppercase">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link className={pathname === '/' ? 'active' : ''}>
                首頁
              </Nav.Link>
            </Link>
            <Link href="/product" passHref legacyBehavior>
              <Nav.Link
                className={pathname.startsWith('/product') ? 'active' : ''}
              >
                商品
              </Nav.Link>
            </Link>
            <Link href="/article" passHref legacyBehavior>
              <Nav.Link
                className={pathname.startsWith('/article') ? 'active' : ''}
              >
                文章
              </Nav.Link>
            </Link>
            <Link href="/sitter" passHref legacyBehavior>
              <Nav.Link
                className={pathname.startsWith('/sitter') ? 'active' : ''}
              >
                寵物保母
              </Nav.Link>
            </Link>
            <Link href="/coupon" passHref legacyBehavior>
              <Nav.Link
                className={pathname.startsWith('/coupon') ? 'active' : ''}
              >
                優惠卷
              </Nav.Link>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <Nav.Link
                className={pathname.startsWith('/about') ? 'active' : ''}
              >
                關於我們
              </Nav.Link>
            </Link>
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
            <Link href="/member" passHref legacyBehavior>
              <i className="bi bi-person nav-icon" />
            </Link>
            <Link href="/shopcart" passHref legacyBehavior>
              <i className="bi bi-cart nav-icon" />
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
