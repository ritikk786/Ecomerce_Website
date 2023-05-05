import React, { useState } from 'react'
import Cartcontext from './cart-context';

 const Contextprovider = (props) => {
    const [cartItems,setCartItems]=useState([])
    const [totalamount, setTotalamount]=useState('0')

    const addItemtocart = (item)=>{
        const totalupdatedamount = Number(totalamount) + item.price;
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
            
            console.log(totalamount)
        }
        else{

            setCartItems((prevstate)=>{
                
                return [...prevstate,item]
            })
        }
        setTotalamount(totalupdatedamount)
        console.log('state items is ', cartItems)
    }

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
