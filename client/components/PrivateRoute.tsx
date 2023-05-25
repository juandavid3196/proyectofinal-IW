import React from 'react';
import Link from 'next/link';
import useUserData from 'hooks/useUserData';

interface PreivateRoutProps {
    children: React.ReactNode;
}

const PrivateRoute = ({children}:PreivateRoutProps) => {
    const {session, status, userData, loading,role } = useUserData();
   
    if(status== 'loading' || loading) return <div>...Loading</div>;
    if(!session){
		return (
		<>
            <div className='flex items-center justify-center flex-col gap-4 h-screen w-full'>
                <p className='text-5xl text-red-500'>Necesita autenticacion para acceder a esta URL</p>
                <Link href="/" className='text-2xl text-blue-500'>Ir al Home</Link>
            </div>		
		</>
		)
    }
    return <>{children}</>
}

export default PrivateRoute;