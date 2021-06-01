import React from 'react'
import './CartItem.css' ;
import {Link} from 'react-router-dom' ; 


const CartItem = ({item , qtyChangeHandler , removeHandler }) => {
    return (
        <div className="cartitem">
            <div className="cartitem_image">
            <img src={item.imgUrl} alt={item.name}></img>
            </div>
            <Link to={`/products/${item.product}`} className="cartitem_name">
                <p> {item.name}</p>
            </Link>
            <p className="cartitem_price"> {item.price} DT </p>
            <select className="cartitem_select" value={item.qty} onChange={(e)=> qtyChangeHandler( item.product,e.target.value)}>
                {[...Array(item.countInStock).keys()].map(x => (
                    <option key={x+1} value={x+1}>{x+1}</option>
                ))}
            </select>
            <button className="cartitem_deletbtn" onClick={()=> removeHandler(item.product)}>
                <i className="fa fa-trash"></i>
            </button>
        </div>
    )
}

export default CartItem
