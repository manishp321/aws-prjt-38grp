import React from 'react'
import './Cart.css';

function Cart(){
    return(
        <>
        <section class="container content-section">
  <h2 class="section-header">CART</h2>
  <div class="cart-row">
    <span class="cart-item cart-header cart-column">ITEM</span>
    <span class="cart-price cart-header cart-column">PRICE</span>
    <span class="cart-quantity cart-header cart-column">QUANTITY</span>
  </div>

  <div class="cart-items"></div>
  <div class="cart-total">
    <strong class="cart-total-title">Total</strong>
    <span class="cart-total-price">$0</span>
  </div>
  <form action="/cart" method="POST">
    <input
      id="store_purchase_data"
      name="store_purchase_data"
      type="hidden"
      class="store-purchase-input"
    />
    <button class="btn btn-primary btn-purchase" type="submit">PURCHASE</button>
  </form>
</section>
        
        </>
    )
}
export default Cart;