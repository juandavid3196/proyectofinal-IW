import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_INVENTORIES} from 'graphql/client/materials';
import { Inventory} from '@prisma/client';

interface propsInventory {
 idm: String;
}

const InventoryTable = ({idm}:propsInventory) => {

	const {data,loading,error} = useQuery<{inventories:Inventory[]}>(GET_INVENTORIES, {
		variables: { inventoriesId: idm },
	  });

	const improveDate = (originalDate:Date) => {
		const fecha = new Date(originalDate);
		const dia = fecha.getDate();
		const mes = fecha.getMonth() + 1; 
		const anio = fecha.getFullYear();
		const formattedDate = `${dia}/${mes}/${anio}`;
		return formattedDate;
	}
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
						<td>{improveDate(item.createdAt)}</td>
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