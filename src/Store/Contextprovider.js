import React, { useState } from 'react'
import Cartcontext from './cart-context';
import { useEffect } from 'react';

 const Contextprovider = (props) => {
    const tokefromlocalst = localStorage.getItem('token')
    const Email = localStorage.getItem('email')
    let userEmail ;
    if(Email){
         userEmail = Email.replace("@","").replace(".","")
    }
    const [idToken, setIdToken]=useState(tokefromlocalst)
    
    const [cartItems,setCartItems]=useState([])
    const [totalamount, setTotalamount]=useState('0')

    const userLoggedIn = !!idToken;

    
    useEffect(()=>{
        getCartItem()
    },[Email])
//    console.log('cartItems first state', cartItems)

     async function getCartItem (){
        try{

            console.log(userEmail)
            const getData = await fetch(`https://ritik-http-default-rtdb.firebaseio.com/cart/${userEmail}.json`)
            const data = await getData.json();
            console.log('getDAta',data)
            if(!getData.ok){
                throw new Error('something went wrong')
            }
         
            if(data){
                console.log('first data time', data)
                setCartItems(data)
                // const totalupdatedamount = Number(totalamount) + item.price;
            }
        }
        catch(error){

        }
    }
 

    const saveidToken =(data)=>{
        setIdToken(data.idToken)
        localStorage.setItem('token',data.idToken)
        localStorage.setItem('email',data.email)
    }

  
   

    const logouttoken = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        setIdToken(null)
    }

    const addItemtocart = async (item)=>{
        try{
             // const totalupdatedamount = Number(totalamount) + item.price;
        const existingcartitemIndex=cartItems.findIndex(
            (prevItem)=> prevItem.id === item.id
        )
        const existingcartitem = cartItems[existingcartitemIndex];
        let updatedItems;
        if(existingcartitem){
            const updatedItem={
                ...existingcartitem,
                quantity: existingcartitem.quantity + 1,
               
            }
            updatedItems=[...cartItems]
            updatedItems[existingcartitemIndex]=updatedItem;
            setCartItems(updatedItems)
           
        }
        else{       
            setCartItems([...cartItems,item])
        }
       
        console.log(totalamount)
        // setTotalamount(totalupdatedamount)
        console.log('state items is ', cartItems)
        }
        catch(error){
            alert(error.message)
        }
       
    }
    
    const putCartItems= async (cartItems)=>{
        try{
            const putItem = await fetch(`https://ritik-http-default-rtdb.firebaseio.com/cart/${userEmail}.json`,{
                method:'PUT',
                body: JSON.stringify(cartItems),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            if(!putItem.ok){
                throw new Error('Something went wrong')
            }
            let data = await putItem.json()
            console.log('put items',data)
        }
        catch(error){
            alert(error.message)
        }
       
    }
    useEffect(()=>{
        if(cartItems [0] ){

            putCartItems(cartItems)
        }
    },[cartItems])

    const deleteItem = (id)=>{
        console.log('delete',id)
        const existingcartitemIndex=cartItems.findIndex(
            (prevItem)=> prevItem.id === id
            )
            const existingcartitem = cartItems[existingcartitemIndex];
            const totalupdatedamount = Number(totalamount) - existingcartitem.price;
        let updatedItems;
        if(existingcartitem.quantity === 1){
            updatedItems = cartItems.filter((item)=>item.id !== id);
            setCartItems(updatedItems);
        }
        else{
            const updatedItem={
                ...existingcartitem,
                quantity: existingcartitem.quantity - 1,
            }
            updatedItems=[...cartItems];
            updatedItems[existingcartitemIndex]=updatedItem;
            setCartItems(updatedItems)
        }
            setTotalamount(totalupdatedamount)
    }


    const cartcontext = {
        idToken:idToken,
        userEmail:userEmail,
        saveidToken:saveidToken,
        userLoggedIn:userLoggedIn,
        logouttoken:logouttoken,
        totalamount:totalamount,
        cartItems:cartItems,
        addItemhandler:addItemtocart,
        deleteItemhandler:deleteItem,
        
    }
  return (
    <Cartcontext.Provider value={cartcontext}>
        {props.children}
    </Cartcontext.Provider>
  )
}
export default Contextprovider;
