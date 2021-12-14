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
              path='/menu'
            />
              </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image2.jpg'
              text='Resturant2'
              label='Pizza'
              path='/menu'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image1.jpg'
              text='Resturant3'
              label='Taco'
              path='/menu'
            />
             </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image1.jpg'
              text='Resturant4'
              label='Coffee'
              path='/menu'
            />
             </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image1.jpg'
              text='Resturant5'
              label='Italian'
              path='/menu'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image1.jpg'
              text='Resturant5'
              label='Italian'
              path='/menu'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image1.jpg'
              text='Resturant5'
              label='Italian'
              path='/menu'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;