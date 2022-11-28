import React from 'react'
//import {useQuery} from '@tanstack/react-query';

export default function UserCard({userID}) {

  //const {data} = useQuery({queryKey:["user"],queryFn:})

  return (
    <div className='flex gap-2'>
      <img className='bg-blue-600 w-12 h-12 rounded' src={""} alt="" />
      <div>
        <div className='flex gap-4'>
          <p>{""}</p>
          <button className='border text-xs rounded px-4'>Subcribe</button>
        </div>
        <p className='text-neutral-500 text-sm'>{""} subcribers</p>
      </div>
    </div>
  )
}
