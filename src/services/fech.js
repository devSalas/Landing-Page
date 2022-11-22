const URL = "https://backend-playvideos-production.up.railway.app/api/v1/videos"

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

  return fetch(`${URL}`)
  .then(res => res.json())
  
}