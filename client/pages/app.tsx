import PrivateComponent from '@componentsPrivateComponent'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
        <div className='links-box flex flex-col gap-[20px] items-center'>
          <PrivateComponent role='ADMIN'>
            <div className='link-box'>
              <Link href={"/usuarios"}>Usuarios</Link>
            </div>
          </PrivateComponent>
          <div className='link-box'>
            <Link href={"/materiales"}>Materiales</Link>
          </div>
          <div className='link-box'>
            <Link href={"/inventarios"}>Inventarios</Link>
          </div>
        </div>
    </div>
  )
}
