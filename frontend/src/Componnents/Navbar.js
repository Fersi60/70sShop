import React from 'react'
import {Link} from 'react-router-dom' ; 
import './Navbar.css' ; 
import logo from '../img/th70s.png' ;
import {useSelector} from 'react-redux' ; 


const NavBar = ({click}) => {
 
 
  const cart = useSelector(state => state.cart) ;
  const {cartItems} = cart ; 
  const getCartCount = () =>{ 

    return cartItems.reduce((qty,item) => Number(item.qty)+qty,0) ; 
  }

    return (
        <nav className="navbar">
          <div className="navbar__logo">
               <Link to="/"><img className="logo" src={logo} alt="shoplogo"></img><h2> 70sShop</h2> </Link>
              </div>  
              <ul className="navbar__links">
              <li>
                    <Link to="/">Shop</Link> 
                    </li>
                  <li>
                      <Link to="/cart" >
                      <i className="fas fa-shopping-cart"></i>
                      <span>
                        Cart 
                        <span className="cartlogo__badge">{getCartCount()}</span>
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
              <div className="hamburger_menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
              </div>
        </nav>
    );
};
export default NavBar;