import { useQuery } from '@apollo/client';
import InventoryForm from '@componentsInventoryForm';
import { InventoryTable } from '@componentsInventoryTable';
import { Modal } from '@componentsModal';
import PrivateRoute from '@componentsPrivateRoute';
import { Sidebar } from '@componentsSidebar';
import { Material } from '@prisma/client';
import { GET_MATERIALS } from 'graphql/client/materials';
import React, { ChangeEvent, useState } from 'react'

const inventarios = () => {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [balance, setBalance] = useState<Number>(0);
	const [id, setId] = useState('');
	
	const { data, loading, error } = useQuery<{ materials: Material[] }>(GET_MATERIALS, {
		fetchPolicy: 'network-only',
	});

	
	const handleOption = (event: ChangeEvent<HTMLSelectElement>) => {
		const selectedId = event.target.value;
  		const selectedMaterial = data?.materials.find((material) => material.id === selectedId);
		if (selectedMaterial) {
			setBalance(selectedMaterial.balance);
		}else{
			setBalance(0);
		}
		setId(selectedId);
	}

	return (
		<PrivateRoute>
			<div className='flex h-[100vh]'>
				<div className="sidebar w-1/4 bg-gray-400">
					<Sidebar />
				</div>
				<main className='w-full pt-[25px] pr-[60px] pl-[60px]'>
					<h1 className='main-title mb-[80px]'>Gestión de Inventarios</h1>
					<div className='table-container w-3/4 w-full'>
						<div className='top flex justify-between items-center'>
							{error ? (<p>Error</p>) : loading ? (<p>...Loading</p>) : (
								<select className='btn-option' value={id} onChange={handleOption}>
									<option value="">Material</option>
									{data?.materials?.map((item: Material) => (
										<option value={item.id} key={item.id}>{item.name}</option>
									))
									}
								</select>)}
							{id &&	<button className='btn-add' onClick={() => setOpenModal(true)}>Agregar Movimiento</button>}
							<Modal
								open={openModal}
								setOpen={setOpenModal}
								modalTitle='Nuevo Registro'
								>
								<InventoryForm id={id}/>
							</Modal>
						</div>
						<div className='bottom'>
							{id && <InventoryTable idm={id} />}
						</div>
						<div className='flex justify-end p-5'> <span>Saldo:{balance.toString()}</span></div>
					</div>
				</main>
			</div>
		</PrivateRoute>
	)
}

export default inventarios;