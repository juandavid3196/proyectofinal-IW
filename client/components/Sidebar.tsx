import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
	return (
		<div className='sidebar-container flex flex-col gap-[10px] w-full justify-between h-screen'>
			<div className="perfil-box">
				<div className="perfil-img">
					<img src="" alt="" />
				</div>
				<span className='user-name'>User name</span>
			</div>
			<div className="routes-box">
				 <div className="section-box">
						<button><Link href="/inventarios">Inventarios</Link></button> 
				 </div>
				 <div className="section-box">
						<button><Link href="/materiales">Materiales</Link></button> 
					</div>
				 <div className="section-box">
					<button><Link href="/usuarios">Usuarios</Link></button> 
				 </div>
			</div>
			<div className='flex items-center justify-center pb-[15px]'>
				<button className='btn-login' onClick={()=> signOut()}>Cerrar Sesión</button>
			</div>
		</div>
	)
}

export { Sidebar }