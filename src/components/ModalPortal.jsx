import {QueryClient, useMutation } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom'
import {createUser} from '../services/fech'
import {useState,useRef} from 'react'
import LoginModal from './Prueba'
import ModalSignUp from './ModalSignUp'
import ModalLogUp from './ModalLogUp'

export const ModalPortal = ({signIn,login}) => {


  return ReactDOM.createPortal(
    <>
    <div className=" fixed p-4 h-screen w-screen flex justify-center items-center  z-40 ">
      {signIn && <ModalSignUp/>}
      {login && <ModalLogUp/>}
      
    </div>
    </>
    ,
    document.getElementById('modal')
  )
}
