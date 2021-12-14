import React from 'react';
import './Menu.css';

function Menu(){
    return (
            <>
            <div className='menu-page'>
                    <div className='restro-home'>
                        <img src='images/image1.jpg' className='restro-profile-img' alt='image' />
                        <div>
                            <h1>Restrurant Name</h1>
                            <p> details on restro</p>
                        </div>
                       
                    </div>
                    <hr/>


                    <h1>Menu</h1>
                    <hr/>
                    <div className='resturant-menu'>
                        <img className='food-image' src='images/image2.jpg' className='food-item-image' />
                        <h3>food item name</h3>
                        <input type='number' max='5' min='1' placeholder='0'/>
                        <button>add to cart</button>
                    </div>

                    <hr/>
                    <div className='resturant-menu'>
                        <img className='food-image' src='images/image2.jpg' className='food-item-image' />
                        <h3>food item name</h3>
                        <input type='number' max='5' min='1' placeholder='0'/>
                        <button>add to cart</button>
                    </div>
                    <hr/>
            </div>
            </>

    )
}

export default Menu;