import "./Checkout.scss";

const FormCheckout = ( { dataForm, handleChangeInput, handleSubmitForm } ) => {
  return (
    <div className="checkout-container">
        <form onSubmit={handleSubmitForm}> 
          <label>Nombre completo</label>
          <input 
            type="text" 
            value={dataForm.fullName} 
            name="fullName" 
            onChange={handleChangeInput} 
            required
          />
         
          <label>Numero de telefono</label>
          <input 
            type="number" 
            value={dataForm.phone} 
            name="phone" 
            onChange={handleChangeInput} 
            required
          />

          <label>Email</label>
          <input 
            type="email" 
            value={dataForm.email} 
            name="email" 
            onChange={handleChangeInput} 
            required
          />

          <button type="submit">Enviar</button>
        </form>
      </div>
  )
}

export default FormCheckout;