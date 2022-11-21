import React from 'react'

export default function UserCard({user}) {

  const {name, image, subcribers} = user

  return (
    <div className='flex gap-2'>
      <img className='bg-blue-600 w-12 h-12 rounded' src={image} alt="" />
      <div>
        <div className='flex gap-4'>
          <p>{name}</p>
          <button className='border text-xs rounded px-4'>Subcribe</button>
        </div>
        <p className='text-neutral-500 text-sm'>{subcribers} subcribers</p>
      </div>
    </div>
  )
}
