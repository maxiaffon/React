import { useState, useContext } from "react";
import "./Checkout.scss";
import  FormCheckout from "./FormCheckout";
import { CartContext } from "../../context/CartContext";
import db from "../../db/db";
import { Timestamp, collection, addDoc } from "firebase/firestore";




const Checkout = () => {
    const [dataForm, setDataForm] = useState({
      fullName: "",
      phone: "",
      email: "",
    });

    const { cart, totalPrice } = useContext(CartContext)
    
    
    const handleChangeInput = (event) => {
      setDataForm({ ...dataForm, [event.target.name]: event.target.value });
    };

    const [orderId, setOrderId] = useState(null)
    

    const handleSubmitForm = async(event) => {
        event.preventDefault(); 
        const order= { 
            buyer: {...dataForm}, 
            products: [...cart],
            total: totalPrice(),
            date: Timestamp.fromDate( new Date()) ,
            
            
         }
    
        await uploadOrder(order)
    }

    const uploadOrder = async(newOrder) => {
        try{
           const ordersRef = collection(db, "orders")
           const response = await  addDoc(ordersRef, newOrder )
          setOrderId(response.id)
        }catch(error){
           console.log(error)
        }
    }

    return (
        <div>
          {orderId ? (
            <div className="order-confirmation">
            <h3>Orden subida correctamente!! Guarde su número de orden</h3>
            <h5>{orderId}</h5>
          </div>
          
          ) : (
            <FormCheckout
              dataForm={dataForm}
              handleChangeInput={handleChangeInput}
              handleSubmitForm={handleSubmitForm}
            />
          )}
        </div>
      );
      
};

export default Checkout;
