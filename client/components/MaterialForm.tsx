import React from 'react'

const MaterialForm = () => {
  return (
    <div className="form-container">
         <form className='material-form'>
            <div className='item-box'>
                <label>Nombre:</label>
                <input type="text" id="name" name="name" required />
            </div>
           <div className="item-box">
                <label>Saldo:</label>
                <input type="number" id="balance" name="balance" required />
           </div>
           <div className="btn-box">
                <button type='submit' className='btn-login'>Crear Material</button>
           </div>      
     </form>
    </div>
  )
}

export default MaterialForm