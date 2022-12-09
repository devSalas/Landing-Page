import React from 'react'

const ModalIcons = () => {
  return (
    <div className=" top-0 absolute w-40 h-20 bg-black rounded-xl border-2  border-fuchsia-600  flex justify-center align-center hover:border-white ">

      <button className= " m-auto rounded-md border-2 py-2 px-4 border-fuchsia-600 text-white  flex justify-center align-center gap-2 hover:border-white hover:scale-105 hover:transition-transform">

        <span>Salir</span>
        <img src="./log-out.svg" alt="" />
      
      </button>
    </div>
  )
}

export default ModalIcons