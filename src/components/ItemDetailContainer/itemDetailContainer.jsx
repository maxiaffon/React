import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount"; 
import { Link, useParams } from "react-router-dom";
import { products } from "../../data/products";
import "./ItemDetailContainer.scss";

const ItemDetailContainer = () => {

  //estado para controlar si se muestra o no el componente item count
  const [showItemCount, setShowItemCount] = useState(true)
  const { idProduct } = useParams(); 
  const product = products.find((product) => product.id === Number(idProduct));

  if (!product) {
    return <p>El producto con ID {idProduct} no fue encontrado.</p>;
  }

  const { addProduct } = useContext(CartContext);
  
  const addProductInCart = (count) => {
    const productCart = { ...product, quantity: count };
    addProduct(productCart);
    //cambiamos el estado para que se deje de mostrar ItemCount
    setShowItemCount(false)
  };

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-title">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
      {
        showItemCount === true ? (
          <ItemCount stock={product.stock} AddProductInCart={addProductInCart} />
          ) : ( 
          <Link to="/cart">Fiinalizar compra </Link>
          )}
    </div>
  );
};

export default ItemDetailContainer;
