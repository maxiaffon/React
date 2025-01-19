import React, { useState } from 'react';
import './ItemCount.scss';

const ItemCount = ({ stock, AddProductInCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="item-count">
      <div className="quantity-buttons">
        <button className="decrement-button" onClick={decrement}>-</button>
        <span>{quantity}</span>
        <button className="increment-button" onClick={increment}>+</button>
      </div>
      <button className="add-to-cart-button" onClick={() => AddProductInCart(quantity)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
