import React from 'react'

const MaterialTable = () => {
	return (
		<div className='table-container'>
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

export { MaterialTable };