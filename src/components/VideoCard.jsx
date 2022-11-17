import React from 'react'

export default function VideoCard({title, video, image, user}) {
  return (
    <div className="max-w-xs flex flex-col gap-2">
      <video className="rounded-xl" src={video} ></video>
      <div>
        <h4 className='text-lg'>{title}</h4>
        <div className='flex items-center gap-2'>
          <img className='bg-red-500 w-8 h-8 rounded-full' src={image} alt="" />
          <p className='text-neutral-500'>{user}</p>
        </div>
      </div>
    </div>
  )
}
