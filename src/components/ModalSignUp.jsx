import React from 'react'
import { QueryClient, useMutation } from '@tanstack/react-query'
import { createUser } from '../services/fech'
import { useState, useRef } from 'react'
const ModalSignUp = () => {

	const [send, setSend] = useState(false)
	const [messageRes, setMessageRes] = useState('')
	const [err, setErr] = useState('')

	const $ModalSingUp = useRef('')

	let nombreUsuario = useMutation({
		mutationFn: createUser,
		onSuccess: data => {
			console.log(data)
			setMessageRes(data)
			if (data.status) {
				const $singUp = $ModalSingUp.current
				$singUp.classList.toggle('hidden')
				const lg = localStorage
				lg.setItem('id', data.user.id)
				lg.setItem('email', data.user.email)
				lg.setItem('name', data.user.name)
			
				location.reload()
			}
		}
	})

	const handleSubmit = e => {
		e.preventDefault()

		const formData = new FormData(e.target)
		let usuario = Object.fromEntries(formData)

		usuario.name = usuario.name.trim()
		usuario.email = usuario.email.trim()
		const { email, name, password } = usuario

		if (email == '' || password == '' || name == '')
			return setErr('hay campos vacios')
		usuario = {
			...usuario,
			img: 'https://res.cloudinary.com/dzlog8uxo/image/upload/v1670541584/dev/sinPerfil_y5kgrg.png',
			subscribed: 0,
		}

		nombreUsuario.mutate(usuario)
	}

	return (
		<div
			ref={$ModalSingUp}
			className="max-w-md h-auto w-full rounded-xl bg-modal grid  py-4 px-0   "
		>
			<div className="text-center  text-white text-2xl">
				<h2>BIENVENIDO!! </h2>
				<br />
				<p>Registrate Gratis</p>
			</div>
			<form
				onSubmit={handleSubmit}
				action=""
				className="m-auto flex flex-col justify-center items-center gap-7 mt-4 w-11/12"
			>
				<input
					required
					type="text"
					className="block  rounded-md p-4 border-gray-300  w-5/6    h-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					name="name"
					placeholder="escribe tu nombre"
				/>
				<input
					required
					type="email"
					className="block  rounded-md p-4 border-gray-300  w-5/6    h-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					name="email"
					placeholder="correo electronico"
				/>
				<input
					required
					type="password"
					className="block  rounded-md p-4 border-gray-300  w-5/6    h-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					name="password"
					placeholder="escribe tu contraseña"
				/>
				{messageRes != '' && (
					<div className="text-white">
						{`${ nombreUsuario.isSuccess && messageRes?.message} ,  iniciar sesion`}
					</div>
				)}
				{err}
				<div className="flex gap-8">
					<button  className=" text-white border-2 rounded-md border-slate-400 px-4 py-2 bg-pink-500">
						Registrarse
					</button>
				</div>

				{/*  <button  className=" text-white border-2 rounded-md border-slate-400 px-4 py-2 bg-pink-700"  >Crear Cuenta</button> */}
			</form>
		</div>
	)
}

export default ModalSignUp
