import {useState, useRef} from 'react'
import VideoCard from './VideoCard'
import {Link} from 'wouter'
import {getVideos} from '../services/fech'
import {useQuery} from '@tanstack/react-query'


export default function SliderVideo() {

  const {data, isLoading} = useQuery({queryKey:["videos"], queryFn: getVideos})


  const ref = useRef()

  const handleRight = (e) => ref.current.scrollLeft += -400;
  const handleLeft = (e) => ref.current.scrollLeft += 400;

  if(isLoading) return (<h2>esta cargando</h2>)


  return (
    <section>
      <div className="flex items-center justify-between py-4">
        <h2 className="text-2xl font-medium">Strams of the day</h2>
        <Link href='/view'>
          <button className="h-10 w-28 bg-neutral-800 rounded-full">View all</button>
        </Link>
      </div>


      <article className="relative">
        <button onClick={handleLeft} className='absolute h-full right-0 p-4 z-20 bg-gradient-to-l to-transparent from-black'>Rigth</button>
        <button onClick={handleRight} className='absolute h-full left-0 p-4 z-20 bg-gradient-to-r to-transparent from-black'>Left</button>
        <div ref={ref} className='scroll-smooth overflow-x-scroll flex flex-col flex-wrap h-72 gap-4'>
          {
            data.map(({id, title, url, userId})=>(
              <VideoCard key={id} id={id} title={title} video={url} userId={userId} />
            ))
          }
        </div>
      </article>
        
    </section>
  )
}
