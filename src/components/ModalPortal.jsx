import {QueryClient, useMutation } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom'
import {createUser} from '../services/fech'
import {useState,useRef} from 'react'
import LoginModal from './Prueba'
import ModalSignUp from './ModalSignUp'
import ModalLogUp from './ModalLogUp'

export const ModalPortal = ({signIn,login}) => {
/*   let [isRegistered, setIsRegistered] = useState(false);
  const [login,setLogin] = useState(false)
  const [signUp,setSignUp] = useState(true)
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
    console.log(login)
    if(login){
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

    
     
  }

  const AddLocalStorage=({name,email})=>{
    lg.setItem('name', name);
    lg.setItem(' email',email)

  }

  const ModalogOut = useRef("")
  const handleClickSignUp=() =>{
    setLogin(false)
    setSignUp(false)
    const $modal=ModalogOut.current
    console.log($modal)
    $modal.classList.toggle("hidden")

	}

  const handleClickLogin=() =>{
    setLogin(true)
    const $modal=ModalSignUp.current
    console.log($modal)
    $modal.classList.toggle("hidden")
	} */



  return ReactDOM.createPortal(
    <>

    // Esto codigo esta por mejorarse, creando otros componentes para dividir el trabajo


    {/* {!isRegistered  && <div className=" fixed p-4 h-screen w-screen flex justify-center items-center  z-40 ">
      
      <div ref={ModalogOut}  className="max-w-md h-auto w-full rounded-xl bg-modal grid  py-4 px-0   ">
        <div className="text-center  text-white text-2xl" >
          <h2>BIENVENIDO!! </h2>
          <br />
          <p>INICIE SESION</p> 
        </div>
        <form onSubmit={handleSubmit} action="" className="m-auto flex flex-col justify-center items-center gap-7 mt-4 w-11/12">
          <input className="block  rounded-md p-4 border-gray-300  w-5/6    h-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="email"
          placeholder="correo electronico"
          />
          <input className="block  rounded-md p-4 border-gray-300  w-5/6    h-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="passsword"
          placeholder="escribe tu contraseña"
          />
          <div className="flex gap-8">
            <button onClick={handleClickLogin}  className=" text-white border-2 rounded-md border-slate-400 px-4 py-2 bg-pink-500">iniciar sesion</button>
            <button  className=" text-white border-2 rounded-md border-slate-400 px-4 py-2 bg-pink-700" onClick={handleClickSignUp}  >Crear Cuenta</button>
          </div>
        </form> 
      </div>
       {!signUp && <LoginModal handleClickSignUp={handleClickSignUp}/> }
    </div>} */}
    <div className=" fixed p-4 h-screen w-screen flex justify-center items-center  z-40 ">
      {signIn && <ModalSignUp/>}
      {login && <ModalLogUp/>}
      
    </div>
    </>
    ,
    document.getElementById('modal')
  )
}
