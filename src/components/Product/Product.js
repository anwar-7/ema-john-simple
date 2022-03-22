import React from 'react';
import './Product.css';

// const Product = (props) => {
//this is advance way
const Product = ({ product, handleAddToCart }) => {
  // const { product, handleAddToCart } = props;
  const { name, img, seller, price, ratings } = product;
  // console.log(props);

  return (
    <div className="product">
      <img src={img} alt="img" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings} Stars</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
