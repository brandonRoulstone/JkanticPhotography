import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

const Navigation = () => {
    const [scroll, setScroll] = useState();
    
    const windowScroll = () => {
        window.addEventListener('scroll', () => {
            const attr = document.getElementById("navbar");
            let ev = attr.style = 'background: white !important'
            setScroll(ev)
        })
    }
    windowScroll();

    const windowNotActive = () => {
        window.addEventListener('scrollend', () => {
            const attr = document.getElementById("navbar");
            let ev = attr.style = 'background: rgba(0, 0, 0, 0) !important'
            setScroll(ev)
        })
    }
    windowNotActive();

  return (
    <>
        <Navbar expand="lg" className="py-2" id="navbar" {...scroll}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="text-center mx-auto fw-bold gap-3">
                        <Nav.Link href="#home" id='styledProps' className='navKantic' data-nav>Home</Nav.Link>
                        <Nav.Link href="#about" id='styledProps' className='navKantic' data-nav>About us</Nav.Link>
                        <Nav.Link href="#OurWork" id='styledProps' className='navKantic' data-nav>Our Work</Nav.Link>
                    </Nav>
                    <Nav id='navLogo'>
                    <img
                        alt="JKantic-Logo-3"
                        src="https://i.postimg.cc/R0yvRRkw/JKantic-Logo-3.png"
                        className="d-inline-block align-top"
                        loading="lazy"
                        id="difference"
                    />
                    <span>J K A N T I C</span>
                    </Nav>
                    <Nav className="text-center mx-auto fw-bold gap-3">
                        <Nav.Link href="#pricing" id='styledProps' className='navKantic' data-nav>Pricing</Nav.Link>
                        <Nav.Link href="#Reviews" id='styledProps' className='navKantic' data-nav>Reviews</Nav.Link>
                        <Nav.Link href="#Contactus" id='styledProps' className='navKantic' data-nav>Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Navigation;
