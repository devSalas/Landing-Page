import React from 'react'

export default function Buscador() {
  return (
    <form className='relative h-full md:flex hidden justify-center items-center'>
      <img src="search.svg" alt="search" className='absolute left-2'/>
      <input type="text" className='w-72 rounded-md h-9 pl-10 bg-neutral-800' placeholder='Search'/>
    </form>
  )
}
