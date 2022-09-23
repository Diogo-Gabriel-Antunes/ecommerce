import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import NavBar from "../../../components/principal/navbar";

import { Categorias } from "../../../interfaces/EnumCategorias"
import axios from 'axios'
import NavBarOpcoes from "../../../components/principal/navbar2";
import Produtos from "../../../components/principal/produtos";
import Footer from "../../../components/principal/footer";
import Banner from "../../../components/principal/banner";



const ProdutosPorCategoria = ()=>{
  const parametro = useParams();
  let categoria = Categorias[parametro.categoria]
  const [produtos,setProdutos] = useState()

  useEffect(()=>{
    axios.get(`http://localhost:8080/produtos/categoria/${categoria}`)
    .then(resposta=>setProdutos(resposta.data.produtosCategorizado))
  },[parametro])
  
  return(
    <div>
      <div>
        <NavBar/>
      </div>
      <div>
        <NavBarOpcoes/>
      </div>
      <div>
        <Banner/>
      </div>
      
      <div>
        <Produtos titulo={parametro.categoria? parametro.categoria.toUpperCase():"Produtos"} produtos={produtos}/>
      </div>
      <div><Footer/></div>
    </div>
  )
}

export default ProdutosPorCategoria