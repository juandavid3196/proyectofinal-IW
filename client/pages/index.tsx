import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'

const HomePage = () => {
    const router = useRouter();
    const {data:session, status} = useSession();
    
    if(status== 'loading') return <div>...Loading</div>;

    if(session){
        router.push('/app');
    }
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-5'>
        <h1 className='text-6xl'>Sistema de Gestion</h1>
        <h2 className='text-2xl'>Bienvenido, por favor Inicia Sesion</h2>
        <div>
            <button className='btn-login' onClick={() => signIn('auth0')}>Iniciar Sesión</button>
        </div>
    </div>
  )
}

export default HomePage