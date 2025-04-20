import { cart, removeFromCart, updateCartQuantity, saveToStorage } from '../data/cart.js'
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';
import { findContainer } from './utils/containerFinder.js';

let cartsummaryHTML = '';

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingproduct;

  products.forEach((product) => {
    if(product.id === productId){
      matchingproduct = product;
    }
  });

  cartsummaryHTML += `
  <div class="cart-item-container
  js-cart-item-container-${matchingproduct.id}">
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${matchingproduct.image}">

        <div class="cart-item-details">
        <div class="product-name">
          ${matchingproduct.name}
        </div>
        <div class="product-price">
          $${formatCurrency(matchingproduct.priceCents)}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">${cartItem.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary js-update-quantity-link"
          data-product-id = ${matchingproduct.id}>
            Update
          </span>

          <input type="number" min="0" class="quantity-input">
          <span class="save-quantity-link link-primary js-save-quantity-link"
          data-product-id = ${matchingproduct.id}>
          Save</span>
        
          <span class="delete-quantity-link link-primary js-delete-link"
          data-product-id = ${matchingproduct.id}>
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-${matchingproduct.id}">
          <div>
            <div class="delivery-option-date">
              Tuesday, June 21
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>

        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingproduct.id}">
          <div>
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
        </div>

        <div class="delivery-option">

          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingproduct.id}">
          <div>

            <div class="delivery-option-date">
              Monday, June 13
            </div>

            <div class="delivery-option-price">
              $9.99 - Shipping
            </div>

          </div>
          
        </div>

      </div>
      
    </div>

  </div>

  `;
});

document.querySelector('.js-return-to-home-link')
  .innerHTML = updateCartQuantity();

document.querySelector('.js-order-summary')
  .innerHTML = cartsummaryHTML;

document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const { productId } = link.dataset;
      removeFromCart(productId);

      const container = document.querySelector(`.js-cart-item-container-${productId}`);
      container.remove();
  })
})

function updateQuantityLabel(link, productId, newQuantity){
  const container = findContainer(link);

  if(newQuantity <= 0){
    removeFromCart(productId);
    container.remove();
  }else{
    const cartItem = cart.find(item => item.productId === productId);
    if (cartItem) {
      cartItem.quantity = newQuantity;
    }
    container.querySelector('.quantity-label').innerText = newQuantity;
  }

}

document.querySelectorAll('.js-update-quantity-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const container = findContainer(link);

      container.querySelector('.js-save-quantity-link').classList.add('is-editing-quantity');
      container.querySelector('.quantity-input').classList.add('is-editing-quantity');
      container.querySelector('.js-update-quantity-link').classList.add('hide-quantityNupdate');
      container.querySelector('.quantity-label').classList.add('hide-quantityNupdate');

    });
})

document.querySelectorAll('.js-save-quantity-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const { productId } = link.dataset;
      const container = findContainer(link);

      updateQuantityLabel(link, productId, Number(container.querySelector('.quantity-input').value));

      container.querySelector('.js-save-quantity-link').classList.remove('is-editing-quantity');
      container.querySelector('.quantity-input').classList.remove('is-editing-quantity');
      container.querySelector('.js-update-quantity-link').classList.remove('hide-quantityNupdate');
      container.querySelector('.quantity-label').classList.remove('hide-quantityNupdate');

      document.querySelector('.js-return-to-home-link')
        .innerHTML = updateCartQuantity();

      saveToStorage();
    })
  });

