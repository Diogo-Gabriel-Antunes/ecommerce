import sacola from '../../assets/sacola.svg'
import './navbar.css'
import menu from '../../assets/menu.svg'
import { Link } from 'react-router-dom'
import {TextField, Button} from '@mui/material';
import jwt from 'jwt-decode'
import nookies from 'nookies'
import { useEffect, useState } from 'react';
import axios from 'axios';
import isAuthenticated from '../../auth/auth';


interface user{
  id:{id:number | undefined}
}

const NavBar = ()=>{
  const token = nookies.get('*').TOKEN
  const [logado,setLogado] = useState(false)
  let user:user = {id:{id:undefined}};
  
  try{
    user = jwt(token)
    
    
  }catch(erro){
    console.log(erro)
  }
  useEffect(()=>{
    isAuthenticated()
      .then(resposta=>{
        
        
          setLogado(resposta.data.auth)
          console.log(logado)
        
      }).catch(erro=> console.log(erro))
    
  })
  
  
  return(
    <div className='navbar'>
      <div className='logo'> 
      <Link to="/" className='logo'>
        <img src={sacola} alt="Sacola" className='sacola' />
        <p>Ecommerce</p>
      </Link>
      </div>
      <div>
        <ul className='categorias'>
          <li ><i className='bx bx-menu' ></i><span className='categorias__span'>Categorias</span></li>
        </ul>
      </div>
      <div className='pesquisa'>
        <label htmlFor="pesquisa"><i className='bx bx-search-alt-2 ' ></i></label>
        <input type="text" placeholder='search...' id='pesquisa'/>
        <select name="Categorias" id="" placeholder='categorias' className='pesquisa__select'>
          <option value="defaul" >Categorias</option>
        </select>
        <button><i className='bx bx-search-alt-2' ></i></button>
      </div>
      <div className='painel'>
        <Link to="/curtidas"><button className='painel__link'><i className='bx bx-heart painel__link' ></i></button></Link>
        
        <Link to={`/carrinho/${user.id.id}`}><button className='painel__link'><i className='bx bx-cart painel__link' ></i></button></Link>
        {logado ? <Link to={`/login/dashboard/${user.id.id}`}  ><button className='painel__link'><i>DashBoard</i></button></Link>
        :<Link to="/login"><button className='painel__link'><i className='bx bx-user painel__link'  ></i></button></Link>}
        
      </div>
      
    </div>
  )
}

export default NavBar