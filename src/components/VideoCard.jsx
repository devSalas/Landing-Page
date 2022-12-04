import React, {useState, useEffect } from 'react'
import {Link} from 'wouter'
import {getUser} from '../services/fech'
import {useQuery} from '@tanstack/react-query'


export default function VideoCard({id, title, video, userId}) {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
    console.log(userId)
    const url=`https://backend-playvideos-production.up.railway.app/api/v1/users/${userId}`
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(json=> {
      setImg(json.img)
      setName(json.name)
      
    })
  },[])
  /* -----------------intentaba traerme solo un usuario, pero pasaba que se repetia un solo en todos los videos  */
  /* const {data:user,isLoading} = useQuery({
    queryKey:["user"],
     queryFn:()=> getUser(userId),
     onSuccess: function(){
      console.log(user)
    }
    }) */

    
  
    
  return (
    <div className="max-w-xs flex flex-col gap-2">
      <Link href={`/video/${id}`} >
        <video className="rounded-xl aspect-video cursor-pointer" src={video} ></video>
      </Link>
      <div>
        <Link href={`/video/${id}`} >
          <h4 className='text-lg cursor-pointer'>{title}</h4>
        </Link>
        <Link href={`/video/${id}`} >
          <div className='flex items-center gap-2'>
            <img className='bg-red-500 w-8 h-8 rounded-full cursor-pointer' src={img} alt="" />
            <p className='text-neutral-500 cursor-pointer'>{name}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
