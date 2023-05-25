import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_INVENTORIES} from 'graphql/client/materials';
import { Inventory} from '@prisma/client';

interface propsInventory {
 id: String;
}

const InventoryTable = ({id}:propsInventory) => {

	const {data,loading,error} = useQuery<{inventories:Inventory[]}>(GET_INVENTORIES, {
		variables: { id },
	  });

	return (
		<div className='table-container w-full'>
			{ error ? (<p>Error</p>) : loading ? (<p>...Loading</p>) : 
			(
			<table className='table-auto'>
				<thead>
					<tr>
						<td>Identificador</td>
						<td>Fecha</td>
						<td>Entrada</td>
						<td>Salida</td>
					</tr>
				</thead>
				<tbody>
				{data?.inventories.map((item:Inventory) => (
					<tr key={`inventory_${item.id}`}>
						<td>{item.id}</td>
						<td>{item.createdAt.toLocaleString()}</td>
						<td>{item.input}</td>
						<td>{item.output}</td>
					</tr>
					))
				}
				</tbody>
			</table>
				)
			}
		</div>
	)
}

export { InventoryTable };