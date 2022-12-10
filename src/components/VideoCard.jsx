import {useState, useEffect, useRef} from 'react';
import {Link} from 'wouter'
import {getUser} from '../services/fech'
import {useQuery} from '@tanstack/react-query'


export default function VideoCard({id, title, video: url, userId}) {

  const [isHover, setIsHover] = useState(false)
  const [active, setActive] = useState(false)

  const videoRef = useRef(null)

  const {data:user, isLoading} = useQuery({
  queryKey:["user", userId],
  queryFn:()=> getUser(userId)
  })
  
  if (isLoading) (<h2>loading</h2>)

  const handleEnter = () => setIsHover(true)
  const handleLeave = () => setIsHover(false)

  useEffect(()=>{
    
    const timeout = setTimeout(() => {
      if (isHover) setActive(true)
    }, 1500);

    return ()=>{
      clearTimeout(timeout)
      setActive(false)
    }

  },[isHover])

  useEffect(()=>{

    active
      ? videoRef.current.play()
      : videoRef.current.pause()

  },[active])


  return (
    <div onMouseLeave={handleLeave} className={` flex flex-col gap-2 overflow-hidden transition-all shadow-lg rounded-xl ${active?"md:scale-125 md:bg-neutral-800 z-40":""}`} >

      <Link href={`/video/${id}`} >
        <div className='relative'>
          <video ref={videoRef} onMouseEnter={handleEnter} className={`${active?"":"rounded-xl"} aspect-video w-full cursor-pointer`} src={url}></video>
          <p className={`bg-black absolute bottom-0 m-2 p-2 cursor-pointer text-sm ${isHover?"":"hidden"} ${active?"hidden":""}`}>Sigue colocando el cursor sobre el video para reproducirlo</p>
        </div>
      </Link>

      <div className={`flex gap-4 pb-4 ${active?"md:scale-90":""}`}>
        <img  className='bg-red-500 w-10 h-10 mt-1 rounded-full cursor-pointer' src={user?.img} alt="" />
        <div>
          <h4 className='text-lg cursor-pointer'>{title}</h4>
          <p className='text-neutral-500 cursor-pointer'>{user?.name}</p>
        </div>
      </div>
    </div>
  )
}
