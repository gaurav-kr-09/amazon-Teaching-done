import { renderOrderSumary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import { loadProducts } from "../data/products.js"
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js'


// loadProducts(() => {
  //   renderOrderSumary();
  //   renderPaymentSummary();
  // })
  
  // this is call back method, we will use promises now.
  
  // new Promise((resolve) => {
  //   loadProducts(() => {
  //     resolve();
  //   });
  // }).then(() => {
  //   renderOrderSumary();
  //   renderPaymentSummary();
  // })

  /*
  loadProducts(() => {  //ye call back method hai ye sabse pahle loadProducts ko call krega fir uske finish hone ka wait krega fir loadCart ko call krke uska wait fir uske bad under ka function chalayega.
    loadCart(() => {
      renderOrderSumary();
      renderPaymentSummary();
    });
  }); 
  */

  // but ye bahut sara layer ki wajah se nesting banata hai aur indentation ka syapa ho jata hai or code ko handle karna hard ho jata hai
  // promises help us to flatten our code.

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve();
//   });

// }).then(() => {
//   return new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   });

// }).then(() => {
//   renderOrderSumary();
//   renderPaymentSummary();
// });

// resolve ko hamlog value v de sakte hai. i.e  parameter jo ki 
// then me pass ho jayega
// example niche dekho.

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve('value1'); // yaha ek parameter dale
//   });

// }).then((val) => {  // wo parameter is wale den me pas ho jayega
//   console.log(val);

//   return new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   });

// }).then(() => {
//   renderOrderSumary();
//   renderPaymentSummary();
// });

//yaha hamolg sab request k liye alag alag wait k rhe hai but chahe to sab k liye ek sath wiat kr sakte hai.
//using promise.all() method;

/*
Promise.all([  //iske under array banake sare promise chala sakte hai.
  
  new Promise((resolve) => {
    loadProducts(() => {
      resolve('hi');
    });
  }),

  new Promise((resolve) => {
    loadCart(() => {
      resolve('hello');
    });
  })

]).then((val) => {
  console.log(val);
  renderOrderSumary();
  renderPaymentSummary();
})
*/
// agar iske resolve me v value dede to ye array of values return karega.

Promise.all([
  loadProductsFetch(),

  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
]).then(() => {
  renderOrderSumary();
  renderPaymentSummary();
});
