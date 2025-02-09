
//Js(save the data ,generate the html,make it interactive using the dom)
import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';

let productsHTML = '';
products.forEach(product => {
  const html = `
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
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}  
          </div>

          <div class="product-quantity-container">
            <select>
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

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id = "${product.id}">
            Add to Cart
          </button>
        </div>
  `;
  productsHTML += html;
});



const productsGrid = document.querySelector('.products-grid');
productsGrid.innerHTML = productsHTML;

const addToCartButtons = document.querySelectorAll('.js-add-to-cart');
//this will return a list of all the buttons




function updateCartQuantity(){
  let cartQuantity = 0;
      cart.forEach(cartItem => {
        cartQuantity += cartItem.quantity;
      });

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
  // console.log(cart);
}

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {  
    const productId = button.dataset.productId; //this will return the value of the data attribute of the button
    // console.log(productId);
    //check if the product is already in the cart
        addToCart(productId);

      //looping through the carSt to sum the quantity
        updateCartQuantity(); 
  });
});

