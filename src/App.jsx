import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "../src/components/ItemListContainer/itemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/itemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";
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
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
