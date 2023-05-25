import { useQuery } from '@apollo/client';
import { InventoryTable } from '@componentsInventoryTable';
import { Sidebar } from '@componentsSidebar';
import { Material } from '@prisma/client';
import { GET_MATERIALS } from 'graphql/client/materials';
import React, { ChangeEvent, useState } from 'react'

const inventarios = () => {
	const {data,loading,error} = useQuery<{materials:Material[]}>(GET_MATERIALS,{
		fetchPolicy : 'network-only',
	});

	const [id,setId] = useState('');
	
	const handleOption = (event: ChangeEvent<HTMLSelectElement>) => {
		setId(event.target.value);
	}

	return (
		<div className='flex h-[100vh]'>
		<div className="sidebar w-1/4 bg-gray-400">
			<Sidebar/>
		</div>
		<main className='w-full pt-[25px] pr-[60px] pl-[60px]'>
			<h1 className='main-title mb-[80px]'>Gestión de Inventarios</h1>
			<div className='table-container w-3/4 w-full'>
				<div className='top flex justify-between items-center'>
					{error ? (<p>Error</p>) : loading ? (<p>...Loading</p>) : (
					<select className='btn-option' value={id} onChange={handleOption}>
						<option value="">material</option>
						{data?.materials.map((item:Material) => (
						<option value={item.id} key={item.id} >{item.name}</option> 
						))
						}
					</select>)}
					<button className='btn-add'>Agregar Movimiento</button>
				</div>
				<div className='bottom'>
					{id && <InventoryTable id={id}/>}
				</div>
				<div className='flex justify-end p-5'> <span>Saldo</span></div>
			</div>
		</main>
		</div>
	)
}

export default inventarios;