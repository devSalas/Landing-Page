import React from 'react'
import {Link} from 'wouter'

export default function VideoCard({title, video, image, user}) {
  return (
    <div className="max-w-xs flex flex-col gap-2">
      <Link href='/videos' >
        <video className="rounded-xl aspect-video cursor-pointer" src={video} ></video>
      </Link>
      <div>
        <Link href='/videos' >
          <h4 className='text-lg cursor-pointer'>{title}</h4>
        </Link>
        <Link href='/videos' >
          <div className='flex items-center gap-2'>
            <img className='bg-red-500 w-8 h-8 rounded-full cursor-pointer' src={image} alt="" />
            <p className='text-neutral-500 cursor-pointer'>{user}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
