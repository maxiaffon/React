import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../db/db";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./itemListContainer.scss";

const ItemListContainer = () => {
  const { idCategory } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      console.log("Obteniendo productos de Firebase...");

      const collectionRef = collection(db, "products");
      const q = idCategory
        ? query(collectionRef, where("category", "==", idCategory))
        : collectionRef;

      const dataDb = await getDocs(q);

      if (dataDb.empty) {
        console.log("No hay productos en la colección.");
      }

      const data = dataDb.docs.map((productDb) => ({
        id: productDb.id,
        ...productDb.data(),
      }));

      console.log("Productos obtenidos:", data);
      setProducts(data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [idCategory]);

  return (
    <div className="item-list-container">
      {loading ? (
        <p>Cargando productos...</p>
      ) : products.length > 0 ? (
        products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <p className="product-price">${product.price}</p>
            <a href={`/detail/${product.id}`}>Ver detalles</a>
          </div>
        ))
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ItemListContainer;
