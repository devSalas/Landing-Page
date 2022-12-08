import {useState, useRef} from 'react'
import VideoCard from './VideoCard'
import {getVideos} from '../services/fech'
import {useQuery} from '@tanstack/react-query'


export default function SliderVideo() {

  const {data, isLoading} = useQuery({
    queryKey:["videos"], 
    queryFn: getVideos
  })

  const ref = useRef()

  if(isLoading) return (<h2>esta cargando</h2>)

  return (
    <article className="relative">
      <div ref={ref} className='grid md:grid-cols-layoutCard gap-4 px-2'>
        {
          data.map(({id, title, url, idUser})=>(
            <VideoCard key={id} id={id} title={title} video={url} userId={idUser}/>
          ))
        }
      </div>
    </article>
  )
}
