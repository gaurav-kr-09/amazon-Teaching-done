import { addToCart } from '../data/cart.js';
import {products, loadProducts} from '../data/products.js';
import { formatCurrency } from './utils/money.js';
import { updateCartQuantity } from '../data/cart.js';

loadProducts(renderrProductsGrid);

export function renderrProductsGrid() {

  let productHTMl = '';

  document.querySelector('.js-cart-quantity').innerHTML = updateCartQuantity();

  products.forEach((product) => {

    productHTMl += `
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="${product.getStarsUrl()}">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          ${product.getPrice()}
        </div>

        <div class="product-quantity-container">
          <select class = "js-quantity-selector-${product.id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        ${product.extraInfoHTML()}

        <div class="product-spacer"></div>

        <div class="added-to-cart js-added-to-cart-${product.id}">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart"
        data-product-Id = "${product.id}">
          Add to Cart
        </button>
      </div>
    `;

  });

  document.querySelector('.js-products-grid')
    .innerHTML = productHTMl; 

  function findQuantity( productId){
    let quantity = document.querySelector(`.js-quantity-selector-${productId}`).value;

    return Number(quantity);
  }

  let timeouts = {};
  function displayAdded(productId){
    const addedMsg = document.querySelector(`.js-added-to-cart-${productId}`);
        
    addedMsg.classList.add('js-added-to-cart');

    if (timeouts[productId]) {
      clearTimeout(timeouts[productId]);
    }

    timeouts[productId] = setTimeout(() => {
      addedMsg.classList.remove('js-added-to-cart');
    }, 2000);
  }

  document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
      button.addEventListener('click', () => {
        const {productId} = button.dataset;

        let quantity = findQuantity(productId);
        
        addToCart(productId, quantity);

        document.querySelector('.js-cart-quantity').innerHTML = updateCartQuantity();
        
        displayAdded(productId);      
      })
  });

}