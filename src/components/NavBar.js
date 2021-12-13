import React from 'react';
import './NavBar.css';
import {Link}  from 'react-router-dom'

function NavBar(){
    return(
        <>
            <div className='nav-bar'>
                <div className='navbar-container'>
                <div><img src='images/logo.png' alt='logo' className='logo-img'/></div>
                <div> <input type="text" placeholder="search for Resturants" /><button>Search</button></div>
                <div>
                <button>SIGN UP</button>
                <button>SIGN IN</button>
                </div>
                </div>
                <div className='nav-bar-toggle'>

                    <ul>
                    <li className='nav-item'>
                    <Link to='/cart' className='nav-links' >
                        HOME
                    </Link>            
                    </li>

                    <li className='nav-item'>
                    <Link to='/cart' className='nav-links' >
                        RESTURANTS
                    </Link>            
                    </li>

                    <li className='nav-item'>
                    <Link to='/cart' className='nav-links' >
                        FOR RESTURANTS
                    </Link>            
                    </li>

                    <li className='nav-item'>
                    <Link to='/cart' className='nav-links' >
                        CART
                    </Link>            
                    </li>
                    </ul>
                
                </div>
               
            </div>
        </>
    )
}
export default NavBar