import React from 'react'

export default function Comentarios({comments}) {
  return (
    <div>
      <div>
        <p>{comments.length} comments</p>
      </div>
      <form>
        <input type="text" placeholder='escribe un comentario'/>
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
