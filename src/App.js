import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import Header from './Component/Header/Header';
import Product from './Component/CartItem/Product';
import  Cart  from './Component/CartPurchse/Cart';
import Contextprovider from './Store/Contextprovider';
import About from './Component/About/About';


function App() {
  const [showcart, setShowcart]=useState(false)
  const [showabout, setShowabout]=useState(false)
  const [showproduct, setShowproduct]=useState(false)

  const showAbouthandler=()=>{
    setShowabout(true)
    setShowproduct(false)
  }

  const showProducthandler=()=>{
    setShowproduct(true)
    setShowabout(false)
  }

  const cartshownhandler=()=>{
    setShowcart(true)
  }
  const cartnotshownhandler=()=>{
    setShowcart(false)
  }
    
    
  return (
    <Contextprovider>
      {showcart && <Cart showcart={cartnotshownhandler}/>}
    
     <Header showcart={cartshownhandler} showabout={showAbouthandler} showproduct={showProducthandler}/>
     {showabout && <About/>}
     {showproduct && <Product/> }
     
    </Contextprovider>
  );
}

export default App;
  