import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import {postComment} from '../services/fech'

export default function Comentarios({comments}) {

  const [comment, setComment] = useState("")

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
        <p>{comments.length} comments</p>
      </div>
      <form className='relative' onSubmit={handleSubmit}>
        <input className='bg-black p-2 border-b-2 border-neutral-600 w-full outline-none focus:border-white transition-all' onChange={handleChange} value={comment} type="text" placeholder='escribe un comentario' required/>
        <button className='absolute h-full right-0'>enviar</button>
      </form>
      <ul className='py-4 grid gap-4'>
        {
          comments.map(({id, user, content})=>(
            <li key={id} className="flex gap-2">
              <div className='w-10 h-10 pt-1'>
                <img className='rounded' src={user.image} alt="" />
              </div>
              <div>
                <h4>{user.name}</h4>
                <p className='text-neutral-400'>{content}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
