import { MaterialTable } from '@componentsMaterialTable';
import PrivateRoute from '@componentsPrivateRoute';
import { Sidebar } from '@componentsSidebar';
import React from 'react'

const materiales = () => {
	return (
		<PrivateRoute>
			<div className='flex h-[100vh]'>
				<div className="sidebar w-1/4 bg-gray-400">
					<Sidebar />
				</div>
				<main className='w-full pt-[25px] pr-[60px] pl-[60px]'>
					<h1 className='main-title mb-[80px]'>Gestión de Materiales</h1>
					<div className='table-container w-3/4 w-full'>
						<div className='top flex justify-end items-center'>
							<button className='btn-add'>Agregar Material</button>
						</div>
						<div className='bottom'>
							<MaterialTable />
						</div>
					</div>
				</main>
			</div>
		</PrivateRoute>
	)
}

export default materiales;