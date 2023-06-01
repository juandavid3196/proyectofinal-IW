import { useMutation, useQuery } from '@apollo/client';
import { User } from '@prisma/client';
import { CREATE_INVENTORY } from 'graphql/client/inventories';
import { GET_USERS } from 'graphql/client/users';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react'

interface propsInventoryForm {
    id: String;
   }

const InventoryForm = ({id}:propsInventoryForm) => {
    const router = useRouter();
    const [createInventory] = useMutation(CREATE_INVENTORY);
    const { data} = useQuery<{ users: User[] }>(GET_USERS);

    const [input, setInput] = useState(0);
    const [ouput, setOutput] = useState(0);
    const [selectedValue, setSelectedValue] = useState("");
    const {data:session} = useSession();

    const getIdUser = () => {
        const idUser = data?.users.find((item: User) => item.email === session?.user?.email);
        return idUser?.id;
      }

    const handleOption = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(event.target.value);
	}

    const handleInput = (even:ChangeEvent<HTMLInputElement> ) => {
        if(selectedValue === "Entrada"){
            setInput(Number(even?.target.value));
            setOutput(0);
        }else{
            setOutput(Number(even.target.value));
            setInput(0);
        }
    }


    const handleSubmit = async (event:ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const { data } = await createInventory({
              variables: {
                input: input,
                output:ouput,
                createdBy: getIdUser(),
                material:id
              },
            });
            setInput(0);
            setOutput(0);
            setSelectedValue('');
            router.reload();
  
          } catch (error) {
            console.error(error);
          }
  };     
    
    return (
        <div className="form-container">
            <form className='material-form gap-[25px]' onSubmit={handleSubmit}>
                <div className="item-box">
                    <select className='select-form' value={selectedValue} onChange={handleOption} required>
                        <option value="" selected>Movimiento</option>
                        <option value="Entrada">Entrada</option>
                        <option value="Salida">Salida</option>
                    </select>
                </div>
                <div className='item-box'>
                    <label>Valor:</label>
                    <input type="number" id="value" name="value" onChange={handleInput} required/>
                </div>
                <div className="btn-box">
                    <button type='submit' className='btn-login'>Crear Registro</button>
                </div>
            </form>
        </div>
    )
}

export default InventoryForm