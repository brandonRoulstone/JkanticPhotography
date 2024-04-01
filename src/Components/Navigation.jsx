import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary" id="navbar">
            <Container>
                <img
                    alt="JKantic-Logo-3"
                    src="https://i.postimg.cc/R0yvRRkw/JKantic-Logo-3.png"
                    width="150"
                    height="130"
                    className="d-inline-block align-top"
                    loading="lazy"
                    id="logo"
                />{' '}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fw-bold gap-3">
                        <Nav.Link href="#home" data-nav>Home</Nav.Link>
                        <Nav.Link href="#about" data-nav>What we do</Nav.Link>
                        <Nav.Link href="#ourMission" data-nav>Our Mission</Nav.Link>
                        <Nav.Link href="#ourValues" data-nav>Our Values</Nav.Link>
                        <Nav.Link href="#OurWork" data-nav>Our work</Nav.Link>
                        <Nav.Link href="#Reviews" data-nav>Reviews</Nav.Link>
                        <Nav.Link href="#Services" data-nav>Our services</Nav.Link>
                        <Nav.Link href="#Contactus" data-nav>Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Navigation;
