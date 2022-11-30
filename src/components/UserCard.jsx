import React from 'react'
import {useQuery} from '@tanstack/react-query';
import {getUsers} from '../services/fech';

export default function UserCard({userId}) {


  const {data} = useQuery({queryKey:["user"], queryFn:getUsers })

  const user = data?.find(el => el.id === userId )

  return (
    <div className='flex gap-2'>
      <img className='bg-blue-600 w-12 h-12 rounded' src={user?.img} alt="" />
      <div>
        <div className='flex gap-4'>
          <p>{user?.name}</p>
          <button className='border text-xs rounded px-4'>Subcribe</button>
        </div>
        <p className='text-neutral-500 text-sm'>{user?.subscribed} subcribers</p>
      </div>
    </div>
  )
}
