import { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import Comentarios from '../components/Comentarios'
import VideoCardSmall from '../components/VideoCardSmall'
import {video} from '../data'
import { getVideoById} from '../services/fech';

export default function Video() {

  //const {data, isLoading} = useQuery({ queryKey: ['video'], queryFn: getVideoById() })
  //if(isLoading) return (<h2>esta cargando</h2>)


  const [data, setData] = useState({})
  useEffect(()=>{
    setData(video)
  }, [])

  if (data.title === undefined) return(<h2>hola mundo</h2>)

  return (
    <div className='flex'>
      <main className='grid gap-8 w-2/3'>
        <section>
          <video controls loop autoPlay className="rounded-xl min-w-full aspect-video" src={data.url} ></video>
        </section>

        <section>
          <article className='flex justify-between py-4 items-center'>
            <h2 className='text-xl'>{data.title}</h2>
            <div className='flex '>
              <input className='w-5' type="image" src="me-gusta.svg" alt="" />
              <input className='p-2' type="image" src="no-me-gusta.svg" alt="" />
            </div>
          </article>
          <UserCard user={data.user} />
        </section>
        <Comentarios comments={data.comments} />
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
