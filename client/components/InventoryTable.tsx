import React from 'react'

const InventoryTable = () => {
	return (
		<div className='table-container w-full'>
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
					<tr>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export { InventoryTable };