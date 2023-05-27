import React, { ChangeEvent, useState } from 'react'

const UserForm = () => {
    const [selectedUser, setSelectedUser] = useState("");
    const [selectedRole, setSelectedRole] = useState("");

    const handleUser = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedUser(event.target.value);
	}

    const handleRole = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedRole(event.target.value);
	}

    const handleSubmit = async (event:ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(selectedUser,selectedRole);
        setSelectedRole('');
        setSelectedUser('');
    }

    return (
        <div className="form-container">
            <form className='material-form gap-[25px]' onSubmit={handleSubmit}>
                <div className="item-box">
                    <select className='select-form' onChange={handleUser}>
                        <option value="">Usuarios</option>
                        <option value="usuario1">Usuario1</option>
                        <option value="usuario2">Usuario2</option>
                    </select>
                </div>
                <div className='item-box'>
                    <select  className='select-form' onChange={handleRole}>
                        <option value="">Rol</option>
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