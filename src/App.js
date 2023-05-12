import React, { useState, Fragment, useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Route, Routes,  } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Header from './Component/Header/Header';
import Product from './Component/CartItem/Product';
import Cart from './Component/CartPurchse/Cart';
import Cartcontext from './Store/cart-context';
import About from './Component/About/About';
import Homepage from './Component/Pages/Homepage';
import Footer from './Component/Pages/Footer';
import Contactus from './Component/ContactUs/Contactus';
import Productdetail from './Component/CartItem/Productdetail';
import AuthForm from './Component/Auth/AuthForm';


// const router = createBrowserRouter([
//   {path:'/', element:<Homepage/>},
//   {path:'/store', element:<Product/>},
//   {path:'/about', element:<About/>}
// ])

function App() {
  const [showcart, setShowcart] = useState(false)
  
  const ctx=useContext(Cartcontext);

  
  console.log('user login state before',ctx.idToken)
      console.log('user login state',ctx.userLoggedIn)

  const cartshownhandler = () => {
    setShowcart(true)
  }
  const cartnotshownhandler = () => {
    setShowcart(false)
  }

  
  return (
    <Fragment>
      {showcart && <Cart showcart={cartnotshownhandler} />}

      <Header showcart={cartshownhandler} />
     
      <Routes>
      {/* <Route path='/'  element= {ctx.userLoggedIn ? <Homepage/> : <AuthForm/> }/> */}
        <Route path="/" element={<Homepage />} />

        {!ctx.userLoggedIn &&  <Route path='/auth' element={<AuthForm/>}/>}
        

        {/* <Route path='*' element={<AuthForm/>}/> */}

        <Route path='/products'  element= {ctx.userLoggedIn ? <Product/> : <AuthForm/> }/>
        {/* <Route path="/products" element={<Product/>} /> */}


        {/* <Route path='/about'  element= {ctx.userLoggedIn ? <About/> : <AuthForm/> }/> */}
        <Route path="/about" element={<About />} />

        {/* <Route path='/contact'  element= {ctx.userLoggedIn ? <Contactus/> : <AuthForm/> }/> */}
        <Route path="/contact" element={<Contactus />} />

        <Route path='/products/:productId'  element= {ctx.userLoggedIn ? <Productdetail/> : <AuthForm/> }/>
        {/* <Route path='/products/:productId' element={<Productdetail/>}/> */}
      </Routes>
      
      
      {/* <RouterProvider router={router}/> */}
      <Footer />


    </Fragment>
  );
}

export default App;
