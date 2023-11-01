import axios from "axios"
import { BASE_URL } from "../constants/url"

const token = localStorage.getItem('token');

export const getPostAll = (salvarPost)=>{
    axios.get(`${BASE_URL}/post/all`)
    .then((response) =>{
        salvarPost(response.data)
    })
    .catch((err)=>{console.log(err.response)})
}

export const createComment = (postId, comment) => {
    const body = {
      'postId': postId,
      'comment': comment
    };
  
    axios.post(`${BASE_URL}/comment/create`, body, { headers: { Authorization: token } })
      .then((response) => {
        getPostAll()
  
      })
      .catch((error) => {
        console.error("Erro ao criar o comentário:", error);
      });
  };