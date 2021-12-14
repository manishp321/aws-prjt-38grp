import React from 'react';
import Footer from './Footer';
import './Menu.css';
import NavBar from './NavBar';

function Menu(){
    return (
            <>
            <NavBar></NavBar>
            <div className='menu-page'>
                    <div className='restro-home'>
                        <img src='images/image1.jpg' className='restro-profile-img' alt='' />
                        <div>
                            <h1>Restrurant Name</h1>
                            <p> details on restro</p>
                        </div>
                       
                    </div>
                    <hr/>


                    <h1>Menu</h1>
                    <hr/>
                    <div className='resturant-menu'>
                        <img  alt='' src='images/image2.jpg' className='food-item-image' />
                        <h3>food item name</h3>
                        <input type='number' max='5' min='1' placeholder='0'/>
                        <button>add to cart</button>
                    </div>

                    <hr/>
                    <div className='resturant-menu'>
                        <img  src='images/image2.jpg' alt='' className='food-item-image' />
                        <h3>food item name</h3>
                        <input type='number' max='5' min='1' placeholder='0'/>
                        <button>add to cart</button>
                    </div>
                    <hr/>
            </div>
            <Footer></Footer>
            </>

    )
}

export default Menu;