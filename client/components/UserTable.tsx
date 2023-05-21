import React from 'react'

const UserTable = () => {
	return (
		<div className='table-container'>
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

export { UserTable };