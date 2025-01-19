import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import "./itemListContainer.scss";

const ItemListContainer = () => {
  const { idCategory } = useParams();
  const filteredProducts = idCategory
    ? products.filter(product => product.category === idCategory)
    : products;

  return (
    <div className="item-list-container">
      {filteredProducts.map(product => (
        <div className="product-card" key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} />
          <p className="product-price">${product.price}</p>
          <a href={`/detail/${product.id}`}>Ver detalles</a>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
