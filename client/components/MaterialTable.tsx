import { useQuery } from '@apollo/client';
import { Material } from '@prisma/client';
import { GET_MATERIALS } from 'graphql/client/materials';

import React from 'react'

const MaterialTable = () => {
	
	const {data,loading,error} = useQuery<{materials:Material[]}>(GET_MATERIALS,{
		fetchPolicy : 'network-only',
	});
	
	return (
		<div className='table-container'>
			{ error ? (<p>Error</p>) : loading ? (<p>...Loading</p>) : 
			(
			<table>
				<thead>
					<tr>
						<td>Identificador</td>
						<td>Fecha de creación</td>
						<td>Nombre</td>
						<td>Saldo</td>
					</tr>
				</thead>
				<tbody>
				{data?.materials.map((item:Material) => (
					<tr key={`material_${item.id}`}>
						<td>{item.id}</td>
						<td>{item.createdAt.toLocaleString()}</td>
						<td>{item.name}</td>
						<td>{item.balance}</td>
					</tr>
					))
				}
				</tbody>
			</table>
			)}
		</div>
	)
}

export { MaterialTable };