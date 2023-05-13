import React,{useContext} from 'react'
import Cartcontext from '../../Store/cart-context';
import './PurchaseItem.css';
import { Button } from 'react-bootstrap';

 const PurchaseItem = (props) => {
    
        const ctx=useContext(Cartcontext)
        console.log('test',ctx)
       
        
        
  return (
        <>    
        {ctx.cartItems.map((item)=>(
           
             <tr>
             <td><span><img  src={item.imageUrl} className='image'/></span ><span className='title'>{item.title}</span></td>
             <td>{item.price}</td>
             <td><span> <Button onClick={()=>ctx.deleteItemhandler(item.id)} variant="danger" className='btn-sm'>-</Button>{' '}</span>
             <span><Button className='btn-sm' variant="outline-primary">{item.quantity}</Button></span>
             <span> <Button onClick={()=>ctx.addItemhandler(item)} variant="success" className='btn-sm'>+</Button>{' '}</span>
             </td>
             
         </tr>
        ))}
        </>
        
  )
}
export default PurchaseItem;
