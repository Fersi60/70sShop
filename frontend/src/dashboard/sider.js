import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/th70s.png' ;
import './siderbar.css';

const sider = (props) => {
    return (
        <div>
            {/* <!-- Sidebar  -->/ */}

            <nav id="sidebar">
                <div className="sidebar-header">

                </div>
                <img src={logo} alt="logo"></img>
                <ul className="list-unstyled components">
                    <li>
                        <NavLink to="dashboard/list">ListProduct</NavLink>
                    </li>
                    <li>
                        <NavLink to="dashboard/add" >Add New Product</NavLink>
                        {/* <a href="#">Projects</a> */}
                    </li>
                    <li>
                        <NavLink to="dashboard/support">Support</NavLink>
                    </li>
                    <li>
                        <NavLink to="dashboard/settings">Account Setting</NavLink>
                    </li>
                    </ul>
                    </nav>
                    </div>
   );
}
export default sider;