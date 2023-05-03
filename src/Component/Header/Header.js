import React from 'react'
import './Header.css'

import { Container, Navbar, Nav, Button } from 'react-bootstrap';

const Header = (props) => {
    return (
        
            <Navbar  style={{position:'sticky',top:'0',zIndex:'10'}}  bg='primary' variant='dark'>
                <Container>
                    <Navbar.Brand >
                        <h1 className='display-6'>Sharpener Store</h1>
                    </Navbar.Brand>
                    <Nav className="navlink" variant='light'  bg='primary' >
                        <Nav.Link href="#home" style={{fontWeight:'bold',color:'white'}}>Home</Nav.Link>
                        <Nav.Link href="#features" style={{fontWeight:'bold',color:'white'}}>Store</Nav.Link>
                        <Nav.Link href="#pricing" style={{fontWeight:'bold',color:'white'}}>About</Nav.Link>
                    </Nav>
                    <Button onClick={props.showcart} variant="dark">Cart</Button>
                </Container>
            </Navbar>
       
    )
}
export default Header;
