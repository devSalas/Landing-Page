import React from 'react'
import UserCard from '../components/UserCard'
import VideoCard from '../components/VideoCard'
import VideoCardSmall from '../components/VideoCardSmall'

export default function Video() {
  return (
    <div className='pt-16 flex'>
      <main className='w-2/3'>
        <div>
          <video controls loop autoPlay className="rounded-xl min-w-full aspect-video" src="videos/001.mp4"></video>
        </div>
        <section>
          <article className='py-8'>
            <div className='flex justify-between py-4'>
              <h2 className='text-xl'>1000 miles of sebring - 2022</h2>
              <div className='flex gap-4'>
                <button>me gusta</button>
                <button>no me gusta</button>
              </div>
            </div>
            <UserCard />
          </article>
          <article>
            <p>7 014 comments</p>
            <input type="text" placeholder='escribe un comentario'/>
          </article>

        </section>
      </main>

      <aside className=' w-1/3 ml-16 flex flex-col gap-8'>
        <div className='flex justify-between'>
          <h3 className='text-xl'>You may like</h3>
          <button className='text-neutral-500'>Veiw all</button>
        </div>
        <VideoCardSmall title="Street work" video={"videos/001.mp4"} user="Mr.Rick Tomson" image={"https://randomuser.me/api/portraits/men/27.jpg"} />
        <VideoCardSmall title="Jugando GTA" video={"videos/002.mp4"} user="Bob gamer450" image={"https://randomuser.me/api/portraits/men/81.jpg"}/>
        <VideoCardSmall title="Street work" video={"videos/003.mp4"} user="Milena Foster" image={"https://randomuser.me/api/portraits/women/63.jpg"}/>
        <VideoCardSmall title="Street work" video={"videos/004.mp4"} user="Mr.Rick Tomson" image={"https://randomuser.me/api/portraits/men/27.jpg"}/>
      </aside>

      
    </div>
  )
}
