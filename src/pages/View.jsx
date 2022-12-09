import React from 'react'
import VideoCard from '../components/VideoCard'
import {useQuery} from '@tanstack/react-query'
import { getVideos } from '../services/fech'

export default function View({params}) {

  const {data, isLoading} = useQuery({queryKey:["videos"], queryFn:getVideos})

  const resultado = data?.filter(el=>{
    
    let texto = decodeURI(params.word).toLowerCase()
    let nombre = el.title.toLowerCase()

    if (nombre.indexOf(texto) !== -1) {
      console.log(nombre)
      return el
    }

  })

  console.log(resultado);

  if (isLoading) return (<h1>buscando</h1>)
  if (resultado.length === 0) return(<h2 className='p-4 text-xl'>no se encontro ningun resultado.</h2>)
    

  return (
    <div>
      <h2 className='text-2xl py-8'>busqueda</h2>
      <ul className='grid md:grid-cols-layoutCard gap-4 px-2'>
        {
          resultado?.map(({id, title, url, idUser})=>(
            <VideoCard key={id} id={id} title={title} video={url} userId={idUser}/>
          ))
        }
      </ul>
    </div>
  )
}
