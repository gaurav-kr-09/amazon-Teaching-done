import { addToCart, cart, loadFromStorage, removeFromCart, updateDeliveryOption } from "../../data/cart.js";

describe('test suite: AddTocart', () => {
    beforeEach(() => {
        spyOn(localStorage, 'setItem');
    });
    
    it('Adds an Existing item to the cart', () => {
        
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });

        loadFromStorage();
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        //same product do bar add kar diye.
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(3);

        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 3,
            deliveryOptionId: '1'
        }]));
    });


    it('Adds a new product to the cart', () => {
        //ye test same code k liye kabhi pass hoga kabhi fail.
        // isiliye hamlog mock ka use karte hai.

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });
        
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);

        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
        }]));
    });
    
});

describe('test suite: remove from cart', () => {
    beforeEach(() => {
        const fakeDiv = document.createElement('div');
        fakeDiv.className = 'js-return-to-home-link';
        document.body.appendChild(fakeDiv);

        spyOn(localStorage, 'setItem');
    });

    afterEach(() => {
        const element = document.querySelector('.js-return-to-home-link');

        if (element){
            element.remove();
        }
    });

    it('if item is in cart', () => {
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });

        loadFromStorage();
        removeFromCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

        expect(cart.length).toEqual(0);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    });

    it('if item is not in cart', () => {
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });

        loadFromStorage();
        removeFromCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

        expect(cart.length).toEqual(0);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    });

});

describe('test suite: updateDeliveryOption', () => {

    beforeEach(() => {
        spyOn(localStorage, 'setItem');
    })

    it('updates the delivery option',() => {
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();

        updateDeliveryOption('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', '3');

        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
        expect(cart[0].deliveryOptionId).toEqual('3');

        expect(localStorage.setItem).toHaveBeenCalledTimes(1);

        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '3'
        }]));
    })

});