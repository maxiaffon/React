import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.scss";

const Cart = () => {
  const { cart, totalPrice, removeProduct, clearCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>

      {cart.length === 0 ? (
  <div className="empty-cart-container">
    <p className="empty-cart">Tu carrito está vacío</p>
    <Link to="/">Volver al inicio</Link>
  </div>
) : ( 
      (
        <>
          <ul className="cart-list">
            {cart.map((productCart) => {
              const subTotal = productCart.quantity * productCart.price;

              return (
                <li key={productCart.id} className="cart-item">
                  <div className="product-info">
                    <img src={productCart.image} alt={productCart.name} />
                    <div className="details">
                      <p className="product-name">{productCart.name}</p>
                      <p>Cantidad: {productCart.quantity}</p>
                      <p>Precio c/u: ${productCart.price}</p>
                      <p>Sub-total: ${subTotal}</p>
                    </div>
                    <button className="remove-button" onClick={() => removeProduct(productCart.id)}>
                      Eliminar
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <h3 className="total-price">Total: ${totalPrice()}</h3>
          <Link className="cart-button" to="/checkout">Finalizar compra </Link>
          <button className="clear-cart-button" onClick={clearCart}>
            Vaciar Carrito
          </button>
        </>
      ))}
    </div>
  );
};

export default Cart;
