import { useContext } from "react";  
import { CartContext } from "../../context/CartContext";
import { GrCart } from "react-icons/gr";
import { Link, Links } from "react-router-dom";

const CardWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  
 let quantity = totalQuantity()

  return (
    <Link to="/cart" className="card-widget">
        <GrCart />
        <p>{quantity === 0 ? "" : quantity} </p>
    </Link>
  )
}

export default CardWidget