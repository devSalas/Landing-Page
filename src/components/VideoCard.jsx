import React from 'react'
import {Link} from 'wouter'
//import {useQuery} from '@tanstack/react-query';

export default function VideoCard({id, title, video, userId}) {
/* 
  const {data,isLoading } = useQuery({
    queryKey:["users"],
     queryFn: getUsers}) */

    
  return (
    <div className="max-w-xs flex flex-col gap-2">
      <Link href={`/video/${id}`} >
        <video className="rounded-xl aspect-video cursor-pointer" src={video} ></video>
      </Link>
      <div>
        <Link href={`/video/${id}`} >
          <h4 className='text-lg cursor-pointer'>{title}</h4>
        </Link>
        <Link href={`/video/${id}`} >
          <div className='flex items-center gap-2'>
            <img className='bg-red-500 w-8 h-8 rounded-full cursor-pointer' src={""} alt="" />
            <p className='text-neutral-500 cursor-pointer'>{userId}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
