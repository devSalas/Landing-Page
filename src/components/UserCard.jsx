import React from 'react'

export default function UserCard() {
  return (
    <div className='flex gap-2'>
      <img className='bg-blue-600 w-12 h-12 rounded' src="" alt="" />
      <div>
        <div className='flex gap-4'>
          <p>Mike Fishes</p>
          <button className='border text-xs rounded px-4'>Subcribe</button>
        </div>
        <p className='text-neutral-500 text-sm'>5 123 153 subcribers</p>
      </div>
    </div>
  )
}
