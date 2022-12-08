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
  console.log(video);

  return (
    <div className='flex'>
      <main className='grid gap-8 w-2/3'>
        <section>
          <video controls loop autoPlay className="rounded-xl min-w-full aspect-video" src={video.url} ></video>
        </section>

        <section>
          <article className='flex justify-between py-4 items-center'>
            <h2 className='text-xl'>{video.title}</h2>
            <div className='flex '>
              <input className='w-5' type="image" src="me-gusta.svg" alt="" />
              <input className='p-2' type="image" src="no-me-gusta.svg" alt="" />
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
