export function findContainer(link){
    const { productId } = link.dataset;
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    return container;
}