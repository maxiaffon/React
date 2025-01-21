import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount"; 
import { Link, useParams } from "react-router-dom";
import { fetchProductFromFirebase } from "../../db/db";
import "./ItemDetailContainer.scss";

const ItemDetailContainer = () => {
  
  const [showItemCount, setShowItemCount] = useState(true);
  const [product, setProduct] = useState(null); 
  const { idProduct } = useParams();
  const { addProduct } = useContext(CartContext);

 
  useEffect(() => {
    const getProduct = async () => {
      const productFromFirebase = await fetchProductFromFirebase(idProduct); 
      setProduct(productFromFirebase); 
    };

    getProduct(); 
  }, [idProduct]); 

  if (!product) {
    return <p>El producto con ID {idProduct} no fue encontrado.</p>;
  }

  const addProductInCart = (count) => {
    const productCart = { ...product, quantity: count };
    addProduct(productCart); 
    setShowItemCount(false); 
  };

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-title">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
      {
        showItemCount ? (
          <ItemCount stock={product.stock} AddProductInCart={addProductInCart} />
        ) : (
          <Link to="/cart">Finalizar compra</Link>
        )
      }
    </div>
  );
};

export default ItemDetailContainer;
