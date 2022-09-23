
import './home.css'
import axios from 'axios'
import IProduto from "../../../interfaces/IProduto"

import nookies from 'nookies'
import config from '../../../config/auth.json'
import jwt from 'jwt-decode'
import NavBar from '../../../components/principal/navbar'
import NavBarOpcoes from '../../../components/principal/navbar2'
import Produtos from '../../../components/principal/produtos'
import Footer from '../../../components/principal/footer'
import { useEffect, useState } from 'react'
import Banner from '../../../components/principal/banner'





const Home =  () => {
  const [produtos,setProdutos]= useState<IProduto[]>()
  
  
    
  
  useEffect(()=>{
    axios.get('http://localhost:8080/produtos')
      .then(resposta=>
        setProdutos(resposta.data.produtos))
  },[])
  return (
    <div>
      <div>
        <NavBar  />
      </div>
      <div>
        <NavBarOpcoes />
      </div>
        <Banner/>
      <div>
        <Produtos titulo="Produtos Populares" produtos={produtos}/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home