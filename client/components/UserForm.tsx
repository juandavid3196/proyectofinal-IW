import { useMutation, useQuery } from '@apollo/client';
import { Role, User } from '@prisma/client';
import { GET_ROLES } from 'graphql/client/roles';
import { GET_USERS, UPDATE_USER } from 'graphql/client/users';
import React, { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/router';

const UserForm = () => {
    const router = useRouter();
    const [selectedUser, setSelectedUser] = useState("");
    const [selectedRole, setSelectedRole] = useState("");

    const { data, loading, error } = useQuery<{ users: User[] }>(GET_USERS);
    const { data: rolesData} = useQuery<{ roles: Role[] }>(GET_ROLES);
    const [updateUserMutation, { loading: updateLoading, error: updateError }] = useMutation(UPDATE_USER);

    const getRole = (rol: string): string | undefined => {
        const role = rolesData?.roles.find((item: Role) => item.name === rol);
        return role?.id;
      }

    
    const handleUser = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedUser(event.target.value);
	}

    const handleRole = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedRole(event.target.value);
	}


    const handleSubmit = async (event:ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        let roleId: string | undefined = '';
        if(selectedRole == 'ADMIN'){
            roleId = getRole('ADMIN');
        }else {
            roleId = getRole('USER');
        }

        if (roleId) {
            await updateUserMutation({
              variables: {
                updateUserId: selectedUser,
                role: roleId,
              },
            });
        setSelectedRole('');
        setSelectedUser('');
        roleId = '';
        router.reload();
    }
    }
    return (
        <div className="form-container">
            <form className='material-form gap-[25px]' onSubmit={handleSubmit}>
                <div className="item-box">
                {error ? (<p>Error</p>) : loading ? (<p>...Loading</p>) : (
                    <select className='select-form' onChange={handleUser} required>
                        <option value="">Usuario</option>
                        {data?.users?.map((item: User) => (
                            <option value={item.id} key={item.id}>{item.email}</option>
                            ))
                        }
				    </select>)}
                </div>
                <div className='item-box'>
                    <select  className='select-form' onChange={handleRole} required>
                        <option value="">Rol</option>
                        <option value="ADMIN">ADMIN</option>
                        <option value="USER">USER</option>
                    </select>
                </div>
                <div className="btn-box">
                    <button type='submit' className='btn-login'>Editar Usuario</button>
                </div>
            </form>
        </div>
    )
}

export default UserForm;