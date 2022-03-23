/* 

// use local storage to manage cart data
const addToDb = (id) => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('shopping-cart');
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  const storedCart = localStorage.getItem('shopping-cart');
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem('shopping-cart');
};

export { addToDb, removeFromDb, deleteShoppingCart };

*/

/*
 
const addToDb = (id) => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('shopping-cart');

  if (storedCart) {
    console.log('storedCart has a or some value (1)');
    shoppingCart = JSON.parse(storedCart);
  }

  //add quantity
  const quantity = shoppingCart[id]; // what is inside of the quantity?
  if (quantity) {
    console.log('find quantity and increase the value (2)');
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
    // localStorage.setItem(id, newQuantity);
  } else {
    console.log('new value add to the shoppingCare (3)');
    shoppingCart[id] = 1; // why we set 1?
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
  // why bring it here from the top?
  // please describe the hole thing happened in that line and why we put in here?
};

export { addToDb }; 

*/

const addToDb = (id) => {
  console.log(id);
  const quantity = localStorage.getItem(id);
  if (quantity) {
    const newQuantity = quantity + 1;
    localStorage.setItem(id, newQuantity);
  } else {
    localStorage.setItem(id, 1);
  }
};

export { addToDb };
