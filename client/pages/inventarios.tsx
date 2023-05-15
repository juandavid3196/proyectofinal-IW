import { InventoryTable } from '@componentsInventoryTable';
import { Sidebar } from '@componentsSidebar';
import React from 'react'

const inventarios = () => {
	return (
		<div className='flex'>
		<div className="sidebar w-1/4 bg-gray-400">
			<Sidebar/>
		</div>
		<main className='w-full pt-[25px] pr-[60px] pl-[60px]'>
			<h1 className='main-title mb-[80px]'>Gestion de Inventarios</h1>
			<div className='table-container w-3/4 w-full'>
				<div className='top flex justify-between items-center'>
					<select className='btn-option'>
						<option value="opcion1" selected>Opción 1</option>
						<option value="opcion2">Opción 2</option>
					</select>
					<button className='btn-add'>Agregar Movimiento</button>
				</div>
				<div className='bottom'>
							<InventoryTable/>
				</div>
			</div>
		</main>
		</div>
	)
}

export default inventarios;