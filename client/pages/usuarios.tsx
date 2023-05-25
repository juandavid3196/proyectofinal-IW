import { Sidebar } from '@componentsSidebar';
import { UserTable } from '@componentsUserTable';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const usuarios = () => {

	const {data:session,status} = useSession();
	
    if(status== 'loading') return <div>...Loading</div>;

    if(!session){
		return (
		<>
			<p>Necesita autenticacion para acceder a esta URL</p>
			<Link href="/">Ir a Home</Link>
		</>
		)
    }
	return (
		<div className='flex h-[100vh]'>
			<div className="sidebar w-1/4 bg-gray-400">
				<Sidebar />
			</div>
			<main className='w-full pt-[25px] pr-[60px] pl-[60px]'>
				<h1 className='main-title mb-[80px]'>Gestión de Usuarios</h1>
				<div className='table-container w-3/4 w-full'>
					<div className='top flex justify-end items-center'>
						<button className='btn-add'>Editar Usuario</button>
					</div>
					<div className='bottom'>
						<UserTable />
					</div>
				</div>
			</main>
		</div>
	)
}

export default usuarios;