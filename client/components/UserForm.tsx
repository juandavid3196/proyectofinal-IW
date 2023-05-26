import React from 'react'

const UserForm = () => {
    return (
        <div className="form-container">
            <form className='material-form'>
                <div className="item-box">
                    <select name="" id="">
                        <option value="">Usuario</option>
                    </select>
                </div>
                <div className='item-box'>
                    <select name="" id="">
                        <option value="">ADMIN</option>
                        <option value="">USER</option>
                    </select>
                </div>
                <div className="btn-box">
                    <button type='submit' className='btn-login'>Editar Usuario</button>
                </div>
            </form>
        </div>
    )
}

export default UserForm