import MaterialForm from '@componentsMaterialForm';
import { MaterialTable } from '@componentsMaterialTable';
import { Modal } from '@componentsModal';
import PrivateComponent from '@componentsPrivateComponent';
import PrivateRoute from '@componentsPrivateRoute';
import { Sidebar } from '@componentsSidebar';
import React, { useState } from 'react'

const materiales = () => {
	const [openModal, setOpenModal] = useState<boolean>(false);
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
							<PrivateComponent role={'ADMIN'}>
								<button className='btn-add' onClick={() => setOpenModal(true)}>Agregar Material</button>
								<Modal
									open={openModal}
									setOpen={setOpenModal}
									modalTitle='Nuevo Material'
								>
									<MaterialForm />
								</Modal>
							</PrivateComponent>
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