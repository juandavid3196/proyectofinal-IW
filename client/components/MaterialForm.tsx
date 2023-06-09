import { useMutation, useQuery } from '@apollo/client';
import { CREATE_MATERIAL } from 'graphql/client/materials';
import { GET_USERS } from 'graphql/client/users';
import { User } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react'

const MaterialForm = () => {
  const router = useRouter();
  const [createMaterial] = useMutation(CREATE_MATERIAL);
  const { data, loading, error } = useQuery<{ users: User[] }>(GET_USERS);
  
  const [name, setName] = useState('');
  const [balance, setBalance] = useState(0);
  const {data:session} = useSession();

  const getIdUser = () => {
    const idUser = data?.users.find((item: User) => item.email === session?.user?.email);
    return idUser?.id;
  }
 
  const handleSubmit = async (event:ChangeEvent<HTMLFormElement>) => {
     event.preventDefault();
     try {
          const { data } = await createMaterial({
            variables: {
              name: name,
              balance :balance,
              createdBy: getIdUser(),
            },
          });
          setName('');
          setBalance(0);
          router.reload();

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