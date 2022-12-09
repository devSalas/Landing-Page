import React from 'react'

const ModalSignUp = () => {
  return (     
      <div  className="max-w-md h-auto w-full rounded-xl bg-modal grid  py-4 px-0   ">
        <div className="text-center  text-white text-2xl" >
          <h2>BIENVENIDO!! </h2>
          <br />
          <p>Registrate Gratis</p> 
        </div>
        <form action="" className="m-auto flex flex-col justify-center items-center gap-7 mt-4 w-11/12">
          <input className="block  rounded-md p-4 border-gray-300  w-5/6    h-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="email"
          placeholder="correo electronico"
          />
          <input className="block  rounded-md p-4 border-gray-300  w-5/6    h-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="name"
          placeholder="escribe tu contraseña"
          />
          <input className="block  rounded-md p-4 border-gray-300  w-5/6    h-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="passsword"
          placeholder="escribe tu contraseña"
          />
          <div className="flex gap-8">
            <button  className=" text-white border-2 rounded-md border-slate-400 px-4 py-2 bg-pink-500">Registrarse</button>
           {/*  <button  className=" text-white border-2 rounded-md border-slate-400 px-4 py-2 bg-pink-700"  >Crear Cuenta</button> */}
          </div>
        </form> 
      </div>
  )
}

export default ModalSignUp