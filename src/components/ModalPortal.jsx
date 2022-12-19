import {QueryClient, useMutation } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom'
import {createUser} from '../services/fech'
import {useState,useRef} from 'react'
import LoginModal from './Prueba'
import ModalSignUp from './ModalSignUp'
import ModalLogUp from './ModalLogUp'
export const ModalPortal = ({signIn,login}) => {
  const [isVisible, setIsVisible] = useState(true);

  const refOcultarModal=useRef("")

  const handleIsVisible=()=>{
    setIsVisible(false)
  
  }

  const handleClick=(e)=>{
    if(e.target.matches(".ocultarModal")){
      const $ocultarModal = refOcultarModal.current
      $ocultarModal.classList.toggle("hidden") 
    }

  }

  return ReactDOM.createPortal(
    <>
    <div ref={refOcultarModal} onClick={handleClick} className="ocultarModal fixed p-4 h-screen w-screen flex justify-center items-center  z-40 ">
      {isVisible && signIn && <ModalSignUp handleIsVisible={handleIsVisible}/>}
      {isVisible && login && <ModalLogUp  handleIsVisible={handleIsVisible}/>}
      
    </div>
    </>
    ,
    document.getElementById('modal')
  )
}
