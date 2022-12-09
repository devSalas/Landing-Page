import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import {getComments,createComment} from '../services/fech'
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

export default function Comentarios({videoId}) {

  const {data} = useQuery({queryKey:["comentarios"], queryFn: getComments})

  const [comment, setComment] = useState("")

  const queryClient = useQueryClient()

  /* crear comentario */
 const addComment = useMutation({
    mutationFn:createComment,
    onSuccess:()=>{
    console.log("comment added")
    queryClient.invalidateQueries('comentarios')
    }
  })

  const dataComments = data?.find(el=>el.idVideo === videoId)


  const handleChange = (e) => setComment(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit")

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
    addComment.mutate({videoId,obj})

  }

  console.log(dataComments)
  return (
    <div className='md:px-0 px-4'>

      <div>
        <p>{dataComments?.length} comments</p>
      </div>

      <form className='relative' onSubmit={handleSubmit}>
        <input className='bg-black p-2 border-b-2 border-neutral-600 w-full outline-none focus:border-white transition-all' onChange={handleChange} value={comment} type="text" placeholder='escribe un comentario' required/>
        <button className='absolute h-full right-0 hover:text-fuchsia-400 transition-all'>enviar</button>
      </form>

      <ul className='py-4 grid gap-4'>
        {
          dataComments?.comments?.map(({id,user,content})=>(
            <li key={id} className="flex gap-2">
              <div className='w-10 h-10 pt-1'>
                <img className='rounded w-6 h-6' src={user[0].image} alt="usuario" />
              </div>
              <div>
                <h4>{user[0].name}</h4>
                <p className='text-neutral-400'>{content|| "no hay comentario"}</p>
              </div>
            </li>
          ))
        }
      </ul>
      
    </div>
  )
}

