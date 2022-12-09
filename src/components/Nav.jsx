import React from 'react'
import {Link} from 'wouter';
import Buscador from './Buscador';


export default function Nav() {
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

			<Buscador />

			<section className='flex items-center gap-4'>
				<div className="perfil flex gap-4 items-center">
					<p className='md:block hidden'>nombre</p>
					<figure className='w-10 h-10 bg-red-500  rounded border-2 border-fuchsia-300'>
						<img src="https://github.com/GersonGarayar20.png" alt="" />
					</figure>
				</div>
			</section>


		</div>
  )
}
