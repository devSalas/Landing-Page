import React from 'react'
import VideoCardSmall from './VideoCardSmall'
import {useQuery} from '@tanstack/react-query';
import {getVideos} from '../services/fech';

export default function AsideVideos({videos}) {

  const {data} = useQuery({queryKey:["videos"], queryFn:getVideos})

  console.log({videos});
  return (
    <aside className=' w-1/3 ml-16 flex flex-col gap-8'>
        <div className='flex justify-between'>
          <h3 className='text-xl'>You may like</h3>
          <button className='text-neutral-500'>Veiw all</button>
        </div>
        {
          data?.map(({id, title, url, userId})=>(
            <VideoCardSmall
            key={id}
            id={id}
            title={title}
            video={url}
            userId={userId} />
          ))
        }
      </aside>
  )
}
