export let cart = JSON.parse(localStorage.getItem('cart'));

export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
};


export function addToCart(productId, quantity){
  let matchingItem;

  cart.forEach((CartItem) => {
    if (productId === CartItem.productId) {
      matchingItem = CartItem;
    }
  });

  if(matchingItem) {
    matchingItem.quantity += quantity;
  }else{
    cart.push({productId, quantity});
  }

  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  document.querySelector('.js-return-to-home-link')
    .innerHTML = updateCartQuantity();

  saveToStorage();
}

export function updateCartQuantity(){
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
}
