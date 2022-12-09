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
      {
        active
        ?(
          <div className=''>
            <FormSearch/>
          </div>
        )
        : null
      }
      

      <button onClick={handleClick} className=' p-2'>
        {
          active
          ? <img src="x.svg" alt="x" className='w-6'/>
          : <img src="search.svg" alt="search" className='w-6'/>
        }
      </button>
    </div>


    </>

  )
}
