import {QueryClient, useMutation } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom'
import {createUser} from '../services/fech'
import {useState,useRef} from 'react'


const LoginModal = ({handleClickSignUp}) => {
  let [isRegistered, setIsRegistered] = useState(false);
  const [login,setLogin] = useState(false)
  const [send,setSend]=useState(false)
  const lg =localStorage


  if(lg.getItem("name") || lg.getItem("email")) isRegistered=true;

  let nombreUsuario=useMutation({
    mutationFn:createUser,
    onSuccess:(usuario)=>{
      setIsRegistered(true)
      lg.setItem("id",usuario.id)
      lg.setItem("name",usuario.name)
      lg.setItem("email",usuario.email)
     
    }
  })

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(send){
      console.log(e.target)
      const formData=new FormData(e.target);
      let usuario = Object.fromEntries(formData)
      usuario.name= usuario.name.trim()
      usuario.email= usuario.email.trim()
      usuario={
        ...usuario,
       img:"https://res.cloudinary.com/dzlog8uxo/image/upload/v1670541584/dev/sinPerfil_y5kgrg.png",
       subscribed:0
      }
      nombreUsuario.mutate(usuario) 

    }
    
    /*   console.log("llego") */
     
  }

/*   const AddLocalStorage=({name,email})=>{
    lg.setItem('name', name);
    lg.setItem(' email',email)

  }
 */
  const ModalSignUp = useRef("")
  const handleClickLogin=() =>{
    setLogin(true)
    const $modal=ModalSignUp.current
    console.log($modal)
    $modal.classList.toggle("hidden")
	}




  return (
    <div ref={ModalSignUp}  className="absolute max-w-md h-auto w-full rounded-xl bg-sky-500 grid  py-4 px-0   ">
        <div className="text-center  text-white text-2xl" >
          <h2>BIENVENIDO!! </h2>
          <br />
          <p>Comienze registrandose</p> 
        </div>
        <form onSubmit={handleSubmit} action="" className="m-auto flex flex-col justify-center items-center gap-7 mt-4 w-11/12">
          <input className="block  rounded-md p-4  w-5/6  h-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="name"
          placeholder="Escribe tu Nombre"
          />
          <input className="block  rounded-md p-4 border-gray-300  w-5/6    h-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="email"
          placeholder="correo electronico"
          />
          <input className="block  rounded-md p-4 border-gray-300  w-5/6    h-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="password"
          placeholder="contraseña"
          />
          <div className="flex gap-8">
            <button onClick={()=>handleClickSignUp()}  className=" text-white border-2 rounded-md border-slate-400 px-4 py-2 bg-pink-700 ">iniciar sesion</button>
            <button  className=" text-white border-2 rounded-md border-slate-400 px-4 py-2  bg-pink-500" onClick={handleClickLogin}>Registrarse</button>
          </div>
        </form>
      </div>
  )
}

export default LoginModal;