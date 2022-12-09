import {useState} from 'react'
import {useLocation} from 'wouter'

export default function Buscador() {

  const [word, setWord] = useState("")
  const [location, setLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (word.length > 0) {
      setLocation(`/search/${word}`)
    }
  }

  const handleChange = (e) => setWord(e.target.value)

  return (
    <form onSubmit={handleSubmit} className='relative h-full md:flex hidden justify-center items-center'>
      <img src="search.svg" alt="search" className='absolute left-2'/>
      <input onChange={handleChange} type="text" value={word} className='w-72 rounded-md h-9 pl-10 bg-neutral-800' placeholder='Search'/>
    </form>
  )
}
