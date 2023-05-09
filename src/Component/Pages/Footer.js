import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import classes from './Footer.module.css'


 const Footer = () => {
  return (
   <footer style={{marginTop: '44.6vh'}}>
     <Navbar style={{position:'sticky',bottom:'0',zIndex:'10'}} bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className={classes.brand}>The Generics</Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
   </footer>
  )
}
export default Footer
