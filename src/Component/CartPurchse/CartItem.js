import React from 'react'
import { Table } from 'react-bootstrap';
import PurchaseItem from './PurchaseItem';
import './CartItem.css'

 const CartItem = () => {
    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ];
        let totalamount=0;
        cartElements.forEach((item)=>{
            totalamount = totalamount+ item.quantity*item.price;
          
        })
       
  return (
    <div>
        <Table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantitiy</th>
                </tr>
            </thead>
            <tbody>
                <PurchaseItem/>
            </tbody>
        </Table>
        <div>
            <span className='amounttext'>Total Amount</span>
            <span className='amount'>{totalamount}</span>
        </div>
    </div>
  )
}
export default CartItem;
