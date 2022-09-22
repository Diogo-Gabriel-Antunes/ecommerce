import { useEffect, useState } from "react"
import NavBar from "../../components/navbar"
import NavBarOpcoes from "../../components/navbar2"
import Produtos from "../../components/produtos"
import './home.css'
import axios from 'axios'
import IProduto from "../../interfaces/IProduto"
import Footer from "../../components/footer"
import nookies from 'nookies'
import config from '../../config/auth.json'
import jwt from 'jwt-decode'





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
      <div className="titulo">
        <h1>
          Ecommerce
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining
        </p>
        <button>Botão</button>
      </div>
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