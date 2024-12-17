import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";

const ItemDetailContainer = () => {
  const { idProduct } = useParams(); // Obtener el ID del producto desde la URL
  const product = products.find((product) => product.id === parseInt(idProduct));

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-title">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
    </div>
  );
};

export default ItemDetailContainer;
