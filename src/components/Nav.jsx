import { useQuery } from '@tanstack/react-query';
import React from 'react'
import {Link} from 'wouter';
import {getUser} from '../services/fech';
import {useState} from 'react'
import BtnsRegistro from './BtnsRegistro';

export default function Nav() {
/* const [nombreUsuario, setNombreUsuario] = useState(""); */
	const [isRegistered, setisRegistered] = useState(false);
		const lg=localStorage
		const userId= localStorage.getItem('id')

		if(userId != null) setisRegistered(true)

		let user;

		if(isRegistered){

			usuario=useQuery({
				queryKey:["user",userId],
				 queryFn: ()=>getUser(userId),
				 onSuccess:()=>{
		
				}
			})
		
		}

  return (
    <div className="sticky top-0 flex items-center justify-between gap-4 bg-black text-white z-50 h-16 px-4">

			<section className='flex gap-8'>
				<Link href='/'>
					<div className="cursor-pointer flex justify-between items-center">
						<img src="logo.jpg" alt="logo" />
						<h1 className='text-lg font-bold'>XPLAY</h1>
					</div>
				</Link>

					<nav className="md:flex hidden items-center gap-4 text-xs font-bold">
						<a href="">TOP STREAMING</a>
						<a href="">GAMES</a>
						<a href="">TEAMS</a>
					</nav>
			</section>


			<form className='relative h-full md:flex hidden justify-center items-center'>
				<img src="search.svg" alt="search" className='absolute left-2'/>
				<input type="text" className='w-72 rounded-md h-9 pl-10 bg-neutral-800' placeholder='Search'/>
			</form>

			<section className='flex items-center gap-4'>
				<nav className='flex gap-4'>
					<BtnsRegistro/>
				</nav>

				<div className="perfil flex gap-4 items-center">
					{isRegistered && <p className='md:block hidden'>{user?.name|| "nombre"} </p>}
					<figure className='w-10 h-10 bg-slate-500  rounded-full border-2 border-fuchsia-300'>
						{!isRegistered && <img src={user?.img} alt="" className="" />}
					</figure>
				</div>
			</section>


		</div>
  )
}
