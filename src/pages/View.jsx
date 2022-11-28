import React from 'react'
import VideoCard from '../components/VideoCard'

export default function View() {
  return (
    <div>
      <h2 className='text-2xl py-8'>Strams of the day</h2>
      <main className='grid grid-cols-4 gap-4'>
        {
          /* videosData.map(({id, title, url, user})=>(
            <VideoCard key={id} title={title} video={url} user={user.name} image={user.image} />
          )) */
        }
      </main>
    </div>
  )
}
