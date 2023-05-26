import { Modal } from '@componentsModal';
import PrivateRoute from '@componentsPrivateRoute';
import { Sidebar } from '@componentsSidebar';
import UserForm from '@componentsUserForm';
import { UserTable } from '@componentsUserTable';
import { useState } from 'react';


const usuarios = () => {
	const [openModal, setOpenModal] = useState<boolean>(false);
	return (
		<PrivateRoute>
			<div className='flex h-[100vh]'>
				<div className="sidebar w-1/4 bg-gray-400">
					<Sidebar />
				</div>
				<main className='w-full pt-[25px] pr-[60px] pl-[60px]'>
					<h1 className='main-title mb-[80px]'>Gestión de Usuarios</h1>
					<div className='table-container w-3/4 w-full'>
						<div className='top flex justify-end items-center'>
							<button className='btn-add' onClick={() => setOpenModal(true)}>Editar Usuario</button>
							<Modal
								open={openModal}
								setOpen={setOpenModal}
								modalTitle='Editar Role'
								>
								<UserForm />
							</Modal>
						</div>
						<div className='bottom'>
							<UserTable />
						</div>
					</div>
				</main>
			</div>
		</PrivateRoute>
	)
}

export default usuarios;