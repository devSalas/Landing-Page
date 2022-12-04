const URL = "https://backend-playvideos-production.up.railway.app/api/v1"

export function postComment(obj) {

  const option = {
    method: "POST",
    headers:{
      "Content-type":"application/json; charset=utf-8"
    },
    body: JSON.stringify(obj)
  }

  fetch(`${URL}`,option)
  
}

export function getVideos() {

  return fetch(`${URL}/videos`)
  .then(res => res.json())
  
}
export function getUsers() {

  return fetch(`${URL}/users`)
  .then(res => res.json())
  
}
export function getUser(id) {

  return fetch(`${URL}/users/${id}`)
  .then(res => res.json())
  
}


export function getComments() {

  return fetch(`${URL}/comments`)
  .then(res => res.json())
  
}