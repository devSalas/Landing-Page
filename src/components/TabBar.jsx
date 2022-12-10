import React from 'react'
import {Link} from 'wouter'
import ModalIcons from './modalIcons'
import { useRef } from 'react'
import  { useState } from 'react';

export default function Toobar() {
	const [WantExit, setWantExit] = useState(false);


	const imgSalirRef=useRef("")
	const logOutRef=useRef("")
	const handleClickConfig=()=>{
		const $button=logOutRef.current
		$button.classList.toggle("hidden")
	}

	const deleteSesion=()=>{
		const lg=localStorage
		lg.clear()
		/* Location.reload() */
	}

  return (	
			<div use className='bg-black w-full fixed bottom-0 md:top-0 left-0 md:w-16 md:h-screen flex md:flex-col justify-center md:justify-start md:pt-16 items-center z-40'>
			
			<Link href='/' >
				<img className='p-4 cursor-pointer' src="./home.svg" alt="" />
			</Link>
				<div className="relative">
					<img className='p-4 cursor-pointer' src="./plus-square.svg" alt="" />
				</div>

				<img className='p-4 cursor-pointer' src="./folder.svg" alt="" />
				
				<div className='relative'>
					<img className='p-4 cursor-pointer' src="./star.svg" alt="" />
					{/* <ModalIcons/> */}
					
				</div>	

					<div className="relative " >
						<img onClick={handleClickConfig} ref={imgSalirRef} className='p-4 cursor-pointer' src="./settings.svg" alt="" />

						 <div ref={logOutRef} className="hidden top-0 left-14 absolute w-40 h-20 bg-black rounded-xl border-2  border-fuchsia-600  flex justify-center align-center hover:border-white ">

						<button onClick={deleteSesion} className= " m-auto rounded-md border-2 py-2 px-4 border-fuchsia-600 text-white  flex justify-center align-center gap-2 hover:border-white hover:scale-105 hover:transition-transform">

							<span>Salir</span>
							<img src="./log-out.svg" alt="" />

						</button>
					</div>
				</div>

			</div>


  )
}
