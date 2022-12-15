import React, { useState } from 'react';
import { ModalPortal } from './ModalPortal';

const BtnsRegistro = () => {
  const [logIn, setLogIn] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [hiddenBtns, setHiddenBtns] = useState(false);

  const lg= localStorage
  const id= lg.getItem("id")
  const email = lg.getItem("email")

  if(id!= null || email!=null) return;



  const handleLogIn=()=>{
    setLogIn(!logIn)
    setSignIn(false)
  }
  const handleSignIn=()=>{
    setSignIn(!signIn)
    setLogIn(false)
  }



  return (
    <>
    <button onClick={handleSignIn}  className="bg-fuchsia-700 px-4 py-2 rounded-md text-white">Sign Up</button>
    {signIn && <ModalPortal signIn={signIn} login={logIn}/>}
    <button onClick={handleLogIn}  className="bg-slate-700 px-4 py-2 rounded-md text-white">Log In</button>
    {logIn && <ModalPortal  signIn={signIn} login={logIn}/>}
    </>
  )
}

export default BtnsRegistro