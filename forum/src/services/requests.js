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
