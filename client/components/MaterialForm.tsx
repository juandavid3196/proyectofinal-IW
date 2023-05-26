import { useMutation, useQuery } from '@apollo/client';
import { CREATE_MATERIAL } from 'graphql/client/materials';
import { useSession } from 'next-auth/react';
import React, { ChangeEvent, useState } from 'react'

const MaterialForm = () => {
  const [name, setName] = useState('');
  const [balance, setBalance] = useState(0);
  const [createMaterial] = useMutation(CREATE_MATERIAL);
  const {data:session} = useSession();
 
  const handleSubmit = async (event:ChangeEvent<HTMLFormElement>) => {
     event.preventDefault();
     try {
          const { data } = await createMaterial({
            variables: {
              name: name,
              balance :balance,
              createdBy: session?.user?.email || '',
            },
          });
          setName('');
          setBalance(0);
        } catch (error) {
          console.error(error);
        }
      };

  return (
    <div className="form-container">
         <form className='material-form gap-[25px]' onSubmit={handleSubmit}>
            <div className='item-box'>
                <label>Nombre:</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
           <div className="item-box">
                <label>Saldo:</label>
                <input type="number" id="balance" name="balance"  onChange={(e) => setBalance(Number(e.target.value))} required />
           </div>
           <div className="btn-box">
                <button type='submit' className='btn-login'>Crear Material</button>
           </div>      
     </form>
    </div>
  )
}

export default MaterialForm