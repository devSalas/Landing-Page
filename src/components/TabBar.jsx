import React from 'react'
import {Link} from 'wouter'

export default function Toobar() {
  return (	
			<div className='bg-black w-full fixed bottom-0 md:top-0 left-0 md:w-16 md:h-screen md:pt-28 items-center z-40'>
			<nav className='flex md:flex-col justify-center md:justify-start items-center gap-2'>
				<Link href='/' >
					<img className='p-3 cursor-pointer hover:invert bg-black rounded-xl transition-all' src="./home.svg" alt="" />
				</Link>

				<img className='p-3 cursor-pointer hover:invert bg-black rounded-xl transition-all' src="./plus-square.svg" alt="" />

				<img className='p-3 cursor-pointer hover:invert bg-black rounded-xl transition-all' src="./folder.svg" alt="" />

				<img className='p-3 cursor-pointer hover:invert bg-black rounded-xl transition-all' src="./star.svg" alt="" />

				<img className='p-3 cursor-pointer hover:invert bg-black rounded-xl transition-all' src="./settings.svg" alt="" />

			</nav>

			</div>


  )
}
