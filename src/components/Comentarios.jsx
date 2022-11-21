import React, { useState } from 'react'

export default function Comentarios({comments}) {

  const [comment, setComment] = useState("")

  const handleChange = (e) => setComment(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    const obj ={
      id:"",
      content: comment,
      user: {
        id:"0102",
        name: "Mike",
        image: "https://randomuser.me/api/portraits/men/10.jpg",
      },
      date: new Date()
    }

  }

  return (
    <div>
      <div>
        <p>{comments.length} comments</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input className='bg-black' onChange={handleChange} value={comment} type="text" placeholder='escribe un comentario'/>
      </form>
      <ul className='py-2'>
        {
          comments.map(({id, user, content})=>(
            <li key={id} className="flex gap-2">
              <div className='w-10 h-10'>
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
