
import {TextField, Button} from '@mui/material';
import './login.css'
import { Link, RedirectFunction} from "react-router-dom";
import axios from 'axios'
import { useState } from "react";
import nookies from 'nookies'
import { Navigate } from 'react-router-dom'
import NavBar from '../../../components/principal/navbar';

interface resposta{

}

const Login=()=>{
  
  const [email,setEmail] = useState('')
  const [senha,setSenha] = useState('')
  const [navegacao,setNavegacao] = useState(false)
  if(navegacao){
    return <Navigate to="/login/dashboard"/>
  }
  return(
    <div>
      <div>
        <NavBar/>
      </div>
      <div>
        <hr />
      </div>
      <div >
        <div className="Login_formulario">
         <h2>Login</h2>
          <TextField id="outlined-basic" label="E-mail" sx={{margin:"8px"}} value={email} onChange={(e)=> setEmail(e.target.value)} variant="outlined" />
          <TextField id="outlined-basic" label="Senha" sx={{margin:"8px"}}  value={senha} type="password" onChange={(e)=>setSenha(e.target.value)}  variant="outlined" />
          <Link to="/esqueceuasenha" className="Login_formulario_link">Esqueceu a senha?</Link>
          <Button variant="contained" sx={{margin:"8px"}} type="submit" onClick={(evento)=>{
            evento.preventDefault();
            axios.post("http://localhost:8080/usuarios/login",{
              email:email,
              senha:senha
            }).then(async (resposta)=>{
              console.log(await resposta)
              nookies.set(null,"TOKEN",resposta.data.token,{
                path:'*',
                maxAge:86400 
              })
              setNavegacao(true)
            })
            
          }}>Login</Button>
          
        </div>
      </div>
    </div>
  )
}

export default Login