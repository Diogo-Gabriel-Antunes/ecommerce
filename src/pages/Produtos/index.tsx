import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import NavBar from "../../components/navbar";
import NavBarOpcoes from "../../components/navbar2";
import Produtos from "../../components/produtos";
import { Categorias } from "../../interfaces/EnumCategorias"
import axios from 'axios'
import Footer from "../../components/footer";


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
        <Produtos titulo={parametro.categoria? parametro.categoria.toUpperCase():"Produtos"} produtos={produtos}/>
      </div>
      <div><Footer/></div>
    </div>
  )
}

export default ProdutosPorCategoria