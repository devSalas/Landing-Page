import {useState, useRef} from 'react'
import {videosData} from "../data"
import VideoCard from './VideoCard'
import {Link} from 'wouter'

export default function SliderVideo() {

  const ref = useRef()

  const handleRight = (e) => ref.current.scrollLeft += -400;
  const handleLeft = (e) => ref.current.scrollLeft += 400;

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
            videosData.map(({id, title, url, user})=>(
              <VideoCard key={id} title={title} video={url} user={user.name} image={user.image} />
            ))
          }
        </div>
      </article>
        
    </section>
  )
}
