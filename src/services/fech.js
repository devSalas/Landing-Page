const URL = "https://backend-playvideos-production.up.railway.app/api/v1"
/* const URL="http://localhost:4000/api/v1" */





export function getVideos() {

  return fetch(`${URL}/videos`)
  .then(res => res.json())
  
}
export function getUsers() {

  return fetch(`${URL}/users`)
  .then(res => res.json())
  
}
export function createUser(usuario) {

 
  return fetch(`${URL}/user`,{
    method: 'POST',
    body:JSON.stringify(usuario),
    headers: {
      "Content-type": "application/json"
    }
  })
  .then(res => res.json())
  
}


export function getUser(id) {
  if(id == null || id == undefined) return {message:"hay un error en el id",status:false}
  return fetch(`${URL}/users/${id}`)
  .then(res => res.json())
  
}
export function verificarUsuario(user) {

  return fetch(`${URL}/verificarUsuario`,{
    method: 'POST',
    body:JSON.stringify(user),
    headers: {
      "Content-type": "application/json"
    }
  })
  .then(res => res.json())
  
}



export function getComments() {

  return fetch(`${URL}/comments`)
  .then(res => res.json())
  
}
export function createComment({videoId,obj}) {

  return fetch(`${URL}/comments/${videoId}`,{
    method: 'POST',
    body:JSON.stringify(obj),
    headers: {
      "Content-type": "application/json"
    }
  })
  .then(res => res.json())
  
}