import {Link} from 'wouter'
import {getUser} from '../services/fech'
import {useQuery} from '@tanstack/react-query'


export default function VideoCard({id, title, video, userId}) {
  

  const {data:user, isLoading} = useQuery({
  queryKey:["user", userId],
  queryFn:()=> getUser(userId)
  })
  
  if (isLoading) (<h2>loading</h2>)
    
  return (
    <div className="flex flex-col gap-2">
      <Link href={`/video/${id}`} >
        <video className="rounded-xl aspect-video cursor-pointer" src={video} ></video>
      </Link>
      <div className='px-4'>
        <Link href={`/video/${id}`} >
          <h4 className='text-lg cursor-pointer'>{title}</h4>
        </Link>
        <Link href={`/video/${id}`} >
          <div className='flex items-center gap-2'>
            <img className='bg-red-500 w-8 h-8 rounded-full cursor-pointer' src={user?.img} alt="" />
            <p className='text-neutral-500 cursor-pointer'>{user?.name}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
