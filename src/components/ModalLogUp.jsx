import {QueryClient, useQuery,useMutation} from '@tanstack/react-query'
import {verificarUsuario} from '../services/fech'
import {useState, useRef} from 'react'

const ModalLogUp = () => {
  const [data, setData] = useState({});
  const [err,setErr] = useState("")

  const $modalLogin = useRef("")

  const user = useMutation({
    mutationFn:(usuario)=>verificarUsuario(usuario),
    onSuccess:(usuario)=>{
      setData(usuario)
      console.log(usuario) 
      const $Login = $modalLogin.current
      $Login.classList.toggle("hidden") 
      const lg =localStorage
      lg.setItem("id",usuario.id)
      lg.setItem("email",usuario.email)
      lg.setItem("name",usuario.name)
      location.reload()
    }
     
  })

  const handleSubmit=(e)=>{
    e.preventDefault();

    const formData=new FormData(e.target);
    let usuario = Object.fromEntries(formData)
    /* usuario.email= email.trim()
    usuario.password= password.trim() */
    const {email, password}=usuario

    if(email=="" || password=="") return setErr("hay campos vacios")

    user.mutate(usuario)

  }

  
  const hanldeClickLogIn=()=>{
   

  }


  return (
    <div ref={$modalLogin}  className="max-w-md h-auto w-full rounded-xl bg-modal grid  py-4 px-0   ">
    <div className="text-center  text-white text-2xl" >
      <h2>BIENVENIDO!! </h2>
      <br />
      <p>Inicia Sesion</p> 
    </div>
    <form onSubmit={handleSubmit} action="" className="m-auto flex flex-col justify-center items-center gap-7 mt-4 w-11/12">
      <input className="block  rounded-md p-4 border-gray-300  w-5/6    h-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="email"
      placeholder="correo electronico"
      />
      <input className="block  rounded-md p-4 border-gray-300  w-5/6    h-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="password"
      placeholder="escribe tu contraseña"
      />
      {!user.isLoading && <div className="text-white">
             {err}
        </div>}
      <div className="flex gap-8">
        <button  onClick={hanldeClickLogIn} className=" text-white border-2 rounded-md border-slate-400 px-4 py-2 bg-pink-500">iniciar sesion</button>
       
      </div>
    </form> 
  </div>
  )
}

export default ModalLogUp