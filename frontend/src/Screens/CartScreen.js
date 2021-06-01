import React from 'react'
import './CartScreen.css' ; 
import {useDispatch, useSelector} from 'react-redux' ; 
import {Link} from 'react-router-dom' ; 

import CartItem from '../Componnents/CartItem' ; 


import {addToCart, removeFromCart} from '../redux/actions/cartAction' ; 
const CartScreen = () => {
    const dispatch = useDispatch() ; 
    const cart = useSelector((state) => state.cart) ; 
    const {cartItems} = cart ; 

    const qtyChangeHandler = (id , qty ) =>{
        dispatch(addToCart(id ,qty))
    }

    const removeHandler = (id) =>{
        dispatch(removeFromCart(id))
     }

     const getCartCount =()=>{
        return cartItems.reduce((qty,item)=> Number(item.qty)+qty,0)
     }

     const getCartsubTotal = () =>{ 
         return cartItems.reduce((price,item)=>(item.price * item.qty )+ price ,0)
     }

    return (
        <div className="CartScreen"> 
            <div className="cartscreen_left">
                <h2>Shopping Cart</h2>
                    {cartItems.length === 0 ? (
                        <div>
                            Your Cart is empty <Link to="/"> Go Back </Link>
                             </div>
                    ):cartItems.map(item =>(
                       <CartItem 
                       key={item.product} 
                       item={item}
                        qtyChangeHandler={qtyChangeHandler} 
                        removeHandler={removeHandler}></CartItem> 
                    ))} 
            </div>
            <div className="cartscreen_right">
            <div className="cartscreen_info">
                <p>SubTotal ({getCartCount()}) items</p>
                <p> {getCartsubTotal().toFixed(2)} DT</p>
            </div>
            <div>
              <Link to="/login"> <button>Procced To Checkout</button></Link>
            </div>
                </div>
        </div>
    )
}

export default CartScreen
