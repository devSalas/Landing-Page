import React from 'react'

export default function Nav() {
  return (
    <div className="col-span-3  sticky top-0 md:flex md:justify-between md:items-center bg-black ">
				<div className=" md:flex md:justify-between md:items-center ml-4 ">
					<div className="mr-4">
						<img src="./logo.jpg" alt="" />
					</div>
					<div className=' mr-8 text-lg font-bold' >
						XPLAY
					</div>
					<div className="">
						<a href="" className='mr-3 text-xs font-bold'>TOP STREAMING</a>
						<a href="" className='mr-3 text-xs font-bold'>GAMES</a>
						<a href="" className='mr-3 text-xs font-bold'>TEAMS</a>
					</div>
				</div>
				<div className='relative h-full flex justify-center items-center'>
					<img src="./search.svg" alt=""  className='absolute left-2 '/>
					<input type="text" className='w-72 rounded-md h-9 pl-10' placeholder='Search'/>
				</div>
				<div className='md:flex md:justify-between md:items-center'>
					<img src="./message-circle.svg" alt="" className='mr-6' />
					<img src="./bell.svg" alt=""  className='mr-6' />
					<div className="perfil md:flex md:justify-between md:items-center">
						<p className='mr-4' >nombre</p>
						<figure className='w-10 h-10 bg-red-500  rounded border-4 border-fuchsia-300'>
						<img src="./start.svg" alt="" />
						</figure>
					</div>
				</div>

			</div>
  )
}
