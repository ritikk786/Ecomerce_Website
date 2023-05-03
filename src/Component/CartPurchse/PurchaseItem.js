import React from 'react'
import './PurchaseItem.css';
import { Button } from 'react-bootstrap';

 const PurchaseItem = (props) => {
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
        
  return (
        <>    
        {cartElements.map((item)=>(
             <tr>
             <td><span><img  src={item.imageUrl} className='image'/></span ><span className='title'>{item.title}</span></td>
             <td>{item.price}</td>
             <td><span><Button className='btn-sm' variant="outline-primary">{item.quantity}</Button></span><span> <Button variant="danger" className='btn-sm'>Remove</Button>{' '}</span></td>
         </tr>
        ))}
        </>
        
  )
}
export default PurchaseItem;
