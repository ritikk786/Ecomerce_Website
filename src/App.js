import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import Header from './Component/Header/Header';
import Product from './Component/CartItem/Product';
import  Cart  from './Component/CartPurchse/Cart';

function App() {
  const [showcart, setShowcart]=useState(false)
  const cartshownhandler=()=>{
    setShowcart(true)
  }
  const cartnotshownhandler=()=>{
    setShowcart(false)
  }
    
    
  return (
    <div>
      {showcart && <Cart showcart={cartnotshownhandler}/>}
    
     <Header showcart={cartshownhandler}/>
    
     <Product/>
    </div>
  );
}

export default App;
  