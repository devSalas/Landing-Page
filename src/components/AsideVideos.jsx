import React from 'react'
import VideoCardSmall from './VideoCardSmall'

export default function AsideVideos({videos}) {

  console.log({videos});
  return (
    <aside className=' w-1/3 ml-16 flex flex-col gap-8'>
        <div className='flex justify-between'>
          <h3 className='text-xl'>You may like</h3>
          <button className='text-neutral-500'>Veiw all</button>
        </div>
        {
          videos?.map(({id, title, url, user})=>(
            <VideoCardSmall
            key={id}
            title={title}
            video={url}
            user={user.name}
            image={user.image} />
          ))
        }
      </aside>
  )
}
