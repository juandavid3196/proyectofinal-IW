import { Modal } from '@componentsModal';
import PrivateRoute from '@componentsPrivateRoute';
import { Sidebar } from '@componentsSidebar';
import UserForm from '@componentsUserForm';
import { UserTable } from '@componentsUserTable';
import useUserData from 'hooks/useUserData';
import Link from 'next/link';
import { useState } from 'react';


const usuarios = () => {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const {role: userRole} = useUserData();
	if(userRole == 'USER'){
		return (
			<>
				<div className='flex items-center justify-center flex-col gap-4 h-screen w-full'>
					<p className='text-5xl text-red-500'>Necesita autenticacion para acceder a esta URL</p>
					<Link href="/" className='text-2xl text-blue-500'>Ir al Home</Link>
				</div>		
			</>
			)
	}
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