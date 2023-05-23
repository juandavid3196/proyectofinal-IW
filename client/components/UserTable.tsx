import {useQuery} from '@apollo/client'
import { User } from '@prisma/client';
import { GET_USERS } from 'graphql/client/users';
import React from 'react'

const UserTable = () => {

	const {data,loading,error} = useQuery<{users:User[]}>(GET_USERS);

	return (
		<div className='table-container'>
			{ error ? (<p>Error</p>) : loading ? (<p>...Loading</p>) : 
			(
			<table>
				<thead>
					<tr>
						<td>Identificador</td>
						<td>Fecha de creación</td>
						<td>Correo</td>
						<td>Rol</td>
					</tr>
				</thead>
				<tbody>
				{data?.users.map((item:User) => (
					<tr key={`user_${item.id}`}>
						<td>{item.id}</td>
						<td>{item.name}</td>
						<td>{item.email}</td>
						<td>{item.password}</td>
					</tr>
					))
				}
				</tbody>
			</table>
			)}
		</div>
	)
}

export { UserTable };