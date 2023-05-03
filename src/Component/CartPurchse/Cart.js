import React from 'react'
import Modal from '../UI/Modal'
import { Button } from 'react-bootstrap'
import './Cart.css'
import CartItem from './CartItem'

 const Cart = (props) => {
  return (
    <Modal>
        <Button className='button' onClick={props.showcart} variant="outline-primary">X</Button>{' '}
        <CartItem/>
    </Modal>
  )
}
export default Cart;
