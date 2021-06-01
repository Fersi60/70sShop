import React from 'react'
import './SideDrawer.css' ; 
import {Link} from 'react-router-dom' ; 
import {useSelector} from 'react-redux' ; 
function SideDrawer({show,click}) {
    const sideDrawerClass = ["side-drawer"] ; 
    if(show) { 
        sideDrawerClass.push("show"); 
       }
       const cart = useSelector(state => state.cart) ;
       const {cartItems} = cart ; 
     
       const getCartCount = () =>{ 
     
         return cartItems.reduce((qty,item) => Number(item.qty)+qty,0) ; 
       }
    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer__links" onClick={click}>
            <li>
                    <Link to="/">
                        Shop
                   </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart <span className="sidedrawer__cartbadge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                      <Link to={localStorage.getItem('authToken')?"/logout":"/login"}>
                        <span>
                        <i className="fas fa-sign-in-alt"></i>
                      </span>
                      <span> {localStorage.getItem('authToken')?"Logout":"Login"} </span>
                      </Link>
                  </li>
               
            </ul>
            
        </div>
    )
}

export default SideDrawer
