export const cart = [];

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
}
