import Head from 'next/head';
import Link from 'next/link'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => (
    <div style={{
        marginBottom: '5%'
    }}>
      <Head>
        <title>To-Do APP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link href="/"><Navbar.Brand>TO-Do APP</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <NavDropdown title="Dropdowm" id="collasible-nav-dropdown">
                    <Link href="/about">
                        <a>About Us</a>
                    </Link>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>  
    </div>
  );
  
  export default Header;
  