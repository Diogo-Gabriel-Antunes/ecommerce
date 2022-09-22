import nookies from 'nookies'

import axios from 'axios'



const isAuthenticated = async ()=>{
  
  
  const token = nookies.get('/').TOKEN

 
  if(!token){
    let autenticado =async ()=>{
      return {data:{auth:false}}
    }
    
    return autenticado()
  }
  
  let autenticado =axios.get(`http://localhost:8080/usuarios/autenticado/${token}`).catch(erro=>{return false})
  return autenticado
}

export default isAuthenticated