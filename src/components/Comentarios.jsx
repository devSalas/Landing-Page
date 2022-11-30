import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import {getComments} from '../services/fech'
import {useQuery} from '@tanstack/react-query';

export default function Comentarios({videoId}) {

  const {data} = useQuery({queryKey:["comentarios"], queryFn: getComments})

  const [comment, setComment] = useState("")

  console.log(data);
  const dataComments = data?.find(el=>el.idVideo === videoId)


  const handleChange = (e) => setComment(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    const obj ={
      id:nanoid(),
      content: comment,
      user: {
        id:"0102",
        name: "Mike",
        image: "https://randomuser.me/api/portraits/men/10.jpg",
      },
      date: new Date()
    }

    postComment(obj)

  }

  return (
    <div>

      <div>
        <p>{dataComments?.length} comments</p>
      </div>

      <form className='relative' onSubmit={handleSubmit}>
        <input className='bg-black p-2 border-b-2 border-neutral-600 w-full outline-none focus:border-white transition-all' onChange={handleChange} value={comment} type="text" placeholder='escribe un comentario' required/>
        <button className='absolute h-full right-0'>enviar</button>
      </form>

      <ul className='py-4 grid gap-4'>
        {
          dataComments?.comments?.map(({id, img, user, text})=>(
            <li key={id} className="flex gap-2">
              <div className='w-10 h-10 pt-1'>
                <img className='rounded' src={img} alt="" />
              </div>
              <div>
                <h4>{user}</h4>
                <p className='text-neutral-400'>{text}</p>
              </div>
            </li>
          ))
        }
      </ul>
      
    </div>
  )
}


/*

[
  {
    id:123456
    idVideo: 234567
    comments:[
      {
        id:456
        text:"aaaaaa"
        img:"img"
        user: "jose"
      }
    ]
  }


]

user.name
user.img

userName: "jose"
userImg: "imagen"




*/