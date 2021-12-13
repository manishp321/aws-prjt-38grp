import React from 'react';
import './Card.css';
import CardItem from './Carditems';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out famous resturants at Oulu</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/image2.jpg'
              text='Resturant1'
              label='Burger house'
              path='/services'
            />
              </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image2.jpg'
              text='Resturant2'
              label='Pizza'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image1.jpg'
              text='Resturant3'
              label='Taco'
              path='/services'
            />
             </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image1.jpg'
              text='Resturant4'
              label='Coffee'
              path='/products'
            />
             </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image1.jpg'
              text='Resturant5'
              label='Italian'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image1.jpg'
              text='Resturant5'
              label='Italian'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image1.jpg'
              text='Resturant5'
              label='Italian'
              path='/sign-up'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;