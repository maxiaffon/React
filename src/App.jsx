import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/itemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";

import './App.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="container-app">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
