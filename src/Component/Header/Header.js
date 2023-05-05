import React,{useContext} from 'react'
import Cartcontext from '../../Store/cart-context';
import './Header.css'

import { Container, Navbar, Nav, Button } from 'react-bootstrap';





const Header = (props) => {
    const crtCTX = useContext(Cartcontext)
    const numberofCartItem = crtCTX.cartItems.reduce((crtNumber,item)=>{
        return (crtNumber + item.quantity)
      },0)
      const showabout=()=>{
       props.showabout();
      }
      const showproduct=()=>{
        props.showproduct();
      }
    return (
            <>
            <Navbar  style={{position:'sticky',top:'0',zIndex:'10'}}  bg='primary' variant='dark'>
                <Container>
                    <Navbar.Brand >
                        <h1 className='display-6'>Sharpener Store</h1>
                    </Navbar.Brand>
                    <Nav className="navlink" variant='light'  bg='primary' >
                        <Nav.Link href="#home" style={{fontWeight:'bold',color:'white'}}>Home</Nav.Link>
                        <Nav.Link href="#features" onClick={showproduct} style={{fontWeight:'bold',color:'white'}}>Store</Nav.Link>
                        <Nav.Link href="#pricing" onClick={showabout}  style={{fontWeight:'bold',color:'white'}}>About</Nav.Link>
                    </Nav>
                    <Button onClick={props.showcart} variant="dark">Cart Item:<span className='cartnumber'>{numberofCartItem}</span></Button>
                </Container>
            </Navbar>
            <div className='genricsdiv'>
            <h1 className='gentext'>The Generics</h1>
            </div>
            </>
    )
}
export default Header;
