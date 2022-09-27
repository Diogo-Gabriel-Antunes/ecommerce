import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import BarraLateralDashBoard from "../../../components/dashboard/barralateral"
import TabelaDeCompras from "../../../components/dashboard/tabeladecompras"
import './ultimascompras.css'

const UltimasCompras = ()=>{
  const parametros = useParams()
  const [compras,setCompras] = useState()
  useEffect(()=>{
    axios.get(`http://localhost:8080/compras/usuario/${parametros.id}`)
      .then(resposta=>setCompras(resposta.data.compras))
  })
  return(
    <div className="homeDashBoard">
      <div className="homeDashBoard__barralateral"> 
        <BarraLateralDashBoard/>
      </div>
      <div className="ultimascompra__container">
        <h1>Ultimas compras</h1>
        <div className="ultimascompra__container__tabela">

          < TabelaDeCompras compras={compras}/> 
        </div>
      </div>
    </div>
  )
}

export default UltimasCompras