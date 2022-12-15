import { useQuery } from '@tanstack/react-query';
import React from 'react'
import {Link} from 'wouter';
import {getUser} from '../services/fech';
import {useState} from 'react'
import BtnsRegistro from './BtnsRegistro';
import Buscador from './Buscador';


export default function Nav() {
	const [isRegistered, setisRegistered] = useState(false);

	 	const lg=localStorage
		const id= localStorage.getItem('id')
		const name= localStorage.getItem('name')

		const {data:user,isLoading} = useQuery({
		queryKey:["usuario",id],
		queryFn:()=>getUser(id),
		onSuccess:(data)=>{
			console.log(data)
			if(data.status || data.name){
				setisRegistered(true)
			}
		}
		})

		if(isLoading) return (<h2>esta cargando</h2>)

  return (
		<>
    <div className="sticky top-0 flex items-center justify-between gap-4 bg-black text-white z-50 h-16 px-4 border-b-2 border-b-white-300">

			<section className='flex gap-8'>
				<Link href='/'>
					<div className="cursor-pointer flex justify-between items-center">
						<img src="logo.jpg" alt="logo" />
						<h1 className='text-lg font-bold'>XPLAY</h1>
					</div>
				</Link>

			</section>

			<Buscador />

			<section className='flex items-center gap-4'>
				<nav className='flex gap-4'>
					{<BtnsRegistro/>}
				</nav>

				<div className="perfil flex gap-4 items-center">
					 {isRegistered && <p className='md:block hidden'>{user?.name || "nombre"} </p>}
					<figure className='w-10 h-10 bg-slate-500  rounded-full  border-2 border-fuchsia-300'>
						 <img src={user?.img} alt="" className="relative bottom-1" />
					</figure>
				</div>
			</section>
					

		</div>
		
		</>
  )
}
