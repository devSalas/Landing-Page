import React from 'react'
import {Link} from 'wouter'

export default function Toobar() {
  return (	
			<div className='bg-black w-full fixed bottom-0 md:top-0 left-0 md:w-16 md:h-screen flex md:flex-col justify-center md:justify-start md:pt-16 items-center '>
			
			<Link href='/' >
				<img className='p-4 cursor-pointer' src="../../public
/home.svg" alt="" />
			</Link>

				<img className='p-4 cursor-pointer' src="../../public
/plus-square.svg" alt="" />

				<img className='p-4 cursor-pointer' src="../../public
/folder.svg" alt="" />

				<img className='p-4 cursor-pointer' src="../../public
/star.svg" alt="" />

				<img className='p-4 cursor-pointer' src="../../public
/settings.svg" alt="" />

			</div>


  )
}
