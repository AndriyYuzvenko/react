import {urlsAll} from "../urls/users";

const getPost=()=>{
    return fetch(urlsAll.posts)
        .then(item=>item.json())
}
const getPostById=(userId)=>{
   return  fetch(`${urlsAll.posts}/${userId}`)
        .then(item=>item.json())
}
export const postsService={
    getPostById,getPost
}