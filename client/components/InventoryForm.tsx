import React, { ChangeEvent, useState } from 'react'

const InventoryForm = () => {
    const [value, setValue] = useState(0);
    const [selectedValue, setSelectedValue] = useState("");

    const handleOption = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(event.target.value);
	}

    const handleSubmit = async (event:ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        setValue(0);
        setSelectedValue('');
    }

    
    return (
        <div className="form-container">
            <form className='material-form gap-[25px]' onSubmit={handleSubmit}>
                <div className="item-box">
                    <select className='select-form' value={selectedValue} onChange={handleOption}>
                        <option value="" selected>Movimiento</option>
                        <option value="Entrada">Entrada</option>
                        <option value="Salida">Salida</option>
                    </select>
                </div>
                <div className='item-box'>
                    <label>Valor:</label>
                    <input type="number" id="value" name="value"  onChange={(e) => setValue(Number(e.target.value))} required/>
                </div>
                <div className="btn-box">
                    <button type='submit' className='btn-login'>Crear Registro</button>
                </div>
            </form>
        </div>
    )
}

export default InventoryForm