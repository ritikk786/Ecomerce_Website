import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar    bg='primary' variant='dark'>
                <Container>
                    <Navbar.Brand>
                        Sharpener Store
                    </Navbar.Brand>
                    <Nav className="me-auto" variant='light'  bg='primary' style={{marginLeft:'5rem'}}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Store</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header;
