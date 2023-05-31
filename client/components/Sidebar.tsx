import PrivateComponent from '@componentsPrivateComponent'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Sidebar = () => {
	const {data:session, status} = useSession();
	const router = useRouter();
	const currentRoute = (route : String) => {
		if(router.asPath === route){
			return 'btn-section-active';
		}else{
			return 'btn-section';
		}
	}
	
	return (
		<div className='sidebar-container flex flex-col gap-[10px] w-full justify-between h-screen'>
			<div className="perfil-box">
				<div className="perfil-img">
					<img src={`${session?.user?.image}`} alt="" />
				</div>
				<span className='user-name'>{session?.user?.name}</span>
			</div>
			<div className="routes-box">
				 <div className="section-box">
						<button className={`${currentRoute('/inventarios')}`}><Link href="/inventarios">Inventarios</Link></button> 
				 </div>
				 <div className="section-box">
						<button className={`${currentRoute('/materiales')}`}><Link href="/materiales">Materiales</Link></button> 
					</div>
				<PrivateComponent role={'ADMIN'}>
					<div className="section-box">
						<button className={`${currentRoute('/usuarios')}`}><Link href="/usuarios">Usuarios</Link></button> 
					</div>
				</PrivateComponent>	
			</div>
			<div className='flex items-center justify-center pb-[15px]'>
				<button className='btn-login' onClick={()=> signOut()}>Cerrar Sesión</button>
			</div>
		</div>
	)
}

export { Sidebar }