import React from 'react'

const InventoryForm = () => {
    return (
        <div className="form-container">
            <form className='material-form'>
                <div className="item-box">
                    <select name="" id="">
                        <option value="">Entrada</option>
                        <option value="">Salida</option>
                    </select>
                </div>
                <div className='item-box'>
                    <label>Valor:</label>
                    <input type="number" id="value" name="value" required />
                </div>
                <div className="btn-box">
                    <button type='submit' className='btn-login'>Crear Registro</button>
                </div>
            </form>
        </div>
    )
}

export default InventoryForm