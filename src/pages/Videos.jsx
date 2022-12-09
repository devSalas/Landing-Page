import UserCard from '../components/UserCard'
import Comentarios from '../components/Comentarios'
import { getVideos } from '../services/fech';
import { useQuery } from '@tanstack/react-query'
import AsideVideos from '../components/AsideVideos';

export default function Video({params}) {

  const {data, isLoading} = useQuery({ queryKey: ['video'], queryFn: getVideos })
  //console.log(data)
  if(isLoading) return (<h2>esta cargando</h2>)
  
  const video = data?.find(el=>el.id === params.id)
  /* console.log(video); */

  return (
    <div className='grid lg:grid-cols-layout md:gap-8 pr-0 md:pr-10'>
      <main className='grid gap-8 content-start '>
        <section className=''>
          <video controls loop autoPlay className="md:rounded-xl min-w-full aspect-video" src={video.url} ></video>
        </section>

        <section className='md:px-0 px-4'>
          <article className='flex justify-between py-4 items-center'>
            <h2 className='text-xl'>{video.title}</h2>
            <div className='flex gap-4'>
              <button className='rounded-full bg-fuchsia-900/50 p-2 w-8 h-8 hover:bg-fuchsia-900 transition-all'>
                <img className='w-full h-full' src="../../public/me-gusta.svg" alt="" />
              </button>
              <button className='rounded-full bg-fuchsia-900/50 p-2 w-8 h-8 hover:bg-fuchsia-900 transition-all'>
                <img className='w-full h-full' src="../../public/no-me-gusta.svg" alt="" />
              </button>
            </div>
          </article>
          <UserCard userId={video.idUser} />
        </section>
        <Comentarios videoId={video.id} />
      </main>

      <AsideVideos/>
      
    </div>
  )
}
