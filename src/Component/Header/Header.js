import React,{useContext, Fragment} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Cartcontext from '../../Store/cart-context';
import './Header.css'

import { Container, Navbar, Nav, Button } from 'react-bootstrap';





const Header = (props) => {
    const navigate = useNavigate();
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
      const logout=()=>{
        if(crtCTX.userLoggedIn){

            crtCTX.logouttoken()
        }
        else{
            navigate('/auth')
            console.log("USER LOGIN")
        }
      }
    return (
            <Fragment>
            <Navbar  style={{position:'sticky',top:'0',zIndex:'10'}}  bg='primary' variant='dark'>
                <Container>
                    <Navbar.Brand >
                        <h1 className='display-6'>Sharpener Store</h1>
                    </Navbar.Brand>
                    
                    
                    <Nav className="navlink" variant='light'  bg='primary' >
                        <NavLink to="/" className='a'  activeClassName={'active'}>Home</NavLink>

                        { crtCTX.userLoggedIn && 
                        <NavLink to="/products" className='a' >Products</NavLink>
                        }
                        <NavLink to="/about" className='a'  >About</NavLink>
                        <NavLink to="/contact" className='a'  >Contact Us</NavLink>

                        { !crtCTX.userLoggedIn && 
                        <NavLink to="/auth" className='a'  >Login </NavLink>
                        }

                    </Nav>
                  
                   { crtCTX.userLoggedIn && <>
                    <Button onClick={props.showcart} variant="dark"  className='cartnumber'>Cart Item:<span>{numberofCartItem}</span></Button>
                   </>
                   }
                   <Button onClick={logout}  variant="dark" className='cartnumber'>{crtCTX.userLoggedIn?'Logout':'Login'} </Button>
                    
                   
                </Container>
            </Navbar>
            
             <div className='genricsdiv'>
            <h1 className='gentext'>The Generics</h1>
            </div>
           
            </Fragment>
    )
}
export default Header;
