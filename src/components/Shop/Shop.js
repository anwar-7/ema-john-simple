import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  // console.log([products, setProducts]);

  const [cart, setCart] = useState([]);
  // console.log([cart, setCart]);
  /* 
  //1. What is useState()?
  //2. when and why we declare it?
  //3. what function/happened inside useState()?
  */
  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const handleAddToCart = (product) => {
    /* 
    //4. why we set or write parameter name as (product)?
    //5. what is going on here? 
    //6. what comes here and where it is gone?
    //7. previously what is in the cart? why we do this [...cart, product]? 
    after doing that what happened in the setCart() and its useState()?
    */
    // const newCart = [...cart, product];
    // setCart(newCart);
    setCart([...cart, product]);
    // console.log([...cart, product]);
    addToDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
