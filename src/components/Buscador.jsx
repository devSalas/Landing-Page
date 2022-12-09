import {useState} from 'react'
import FormSearch from './FormSearch'


export default function Buscador() {

  const [active, setActive] = useState(false)


  const handleClick = (e) => {
    setActive(!active)
  }

  return (
    <>
    <div className={`flex items-center ${active?"":""} bg-orange-800`}>

      <div className='md:block hidden'>
        <FormSearch/>
      </div>
    </div>

    <div className={`md:hidden flex items-center bg-black h-16 justify-center absolute top-0 ${active?"w-full right-0":" left-32"}`}>
      
      <div style={!active?{display:"none"}:{}} className=''>
        <FormSearch/>
      </div>

      <button onClick={handleClick} className=' p-2'>
        <img style={!active?{display:"none"}:{}} src="x.svg" alt="x" className='w-6'/>
        <img style={active?{display:"none"}:{}} src="search.svg" alt="search" className='w-6'/>
      </button>
    </div>


    </>

  )
}
