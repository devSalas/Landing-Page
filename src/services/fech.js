const URL = ""

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

export function getVideoById(id) {

  return fetch(`${URL}/${id}`)
  .then(res => res.json())
  
}