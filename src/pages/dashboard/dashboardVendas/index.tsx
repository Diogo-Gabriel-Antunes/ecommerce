import BarraLateralDashBoard from "../../../components/dashboard/barralateral"
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import './dashboardevendas.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import axios from "axios";
import PaperDeVendas from "../../../components/dashboard/PaperDeVendas";
import InventoryIcon from '@mui/icons-material/Inventory';
import TabelaDeVendas from "../../../components/dashboard/tabelaDeVendas";


const DashBoardDeVendas = () => {
  const parametros = useParams()
  const [totalGanho, setTotalGanho] = useState()
  const [totalPedidos, setTotalPedidos] = useState()
  const [produtoMaisVendido, setProdutoMaisVendido] = useState()
  const [totalDeProdutosVendidos, setTotalDeProdutosVendidos] = useState()
  const [vendas,setVendas] = useState([])


  useEffect(() => {
    axios.get(`http://localhost:8080/vendas/usuario/${parametros.id}`)
      .then(resposta => {
        setTotalGanho(resposta.data.totalGanho)
        setTotalPedidos(resposta.data.totalVendido)
        setProdutoMaisVendido(resposta.data.ProdutoMaisVendido.nome)
        setTotalDeProdutosVendidos(resposta.data.quantidadeDeProdutosVendidos)
        setVendas(resposta.data.vendas)
      }
      )
  }, [])

  return (
    <div className="homeDashBoard">
      <div className="homeDashBoard__barralateral">
        <BarraLateralDashBoard />
      </div>
      <div className="homeDashBoard__conteudo">
        <h1>DashBoard De Vendas</h1>
        <div className="dashboarddevendas__cards">
          <PaperDeVendas 
          titulo="Total Ganho : " 
          valor={totalGanho?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} 
          icone={<MonetizationOnIcon />}
           />

          <PaperDeVendas 
          titulo="Total de pedidos :" 
          valor={totalPedidos} 
          icone={<ProductionQuantityLimitsIcon />} />

          <PaperDeVendas 
          titulo="Total de Produtos Vendidos :" 
          valor={totalDeProdutosVendidos} 
          icone={<ProductionQuantityLimitsIcon />} />

          <PaperDeVendas 
          titulo="Produto Campeão :" 
          valor={produtoMaisVendido} 
          icone={<InventoryIcon />} />

        </div>
        <TabelaDeVendas vendas={vendas}/>
      </div>
    </div>
  )
}

export default DashBoardDeVendas