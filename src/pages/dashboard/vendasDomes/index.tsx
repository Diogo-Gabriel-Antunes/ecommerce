import BarraLateralDashBoard from "../../../components/dashboard/barralateral"
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Paper, TextField } from "@mui/material";
import './vendadomes.css'
import PaperDeVendas from "../../../components/dashboard/PaperDeVendas";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import TabelaDeVendas from "../../../components/dashboard/tabelaDeVendas";
import { error } from "console";

const VendaDosMes = () => {
  const [data,setData] =useState( new Date())
  const parametros = useParams()
  const [totalGanho, setTotalGanho] = useState()
  const [totalPedidos, setTotalPedidos] = useState()
  const [produtoMaisVendido, setProdutoMaisVendido] = useState()
  const [totalDeProdutosVendidos, setTotalDeProdutosVendidos] = useState()
  const [vendas, setVendas] = useState([])


  useEffect(() => {
    
    axios.get(`http://localhost:8080/vendas/usuario/${parametros.id}/${data.getFullYear()}/${data.getMonth() + 1}`)
      .then(resposta => {
        if(resposta.data){
          console.log(resposta.data)
          setTotalGanho(resposta.data.totalGanho)
          setTotalPedidos(resposta.data.totalVendidoNoMes)
          setProdutoMaisVendido(resposta.data.ProdutoMaisVendido.nome)
          setTotalDeProdutosVendidos(resposta.data.quantidadeDeProdutosVendidos)
          setVendas(resposta.data.vendas)
        }else throw new Error()
      }).catch(()=>{
        setTotalGanho(0)
          setTotalPedidos(0)
          setProdutoMaisVendido('')
          setTotalDeProdutosVendidos(0)
          setVendas(undefined)
      })
  }, [data])
  return (
    <div className="homeDashBoard">
      <div className="homeDashBoard__barralateral">
        <BarraLateralDashBoard />
      </div>
      <div className="homeDashBoard__conteudo">
        <h1>DashBoard De Vendas do mes</h1>
        <div className="VendaDoMes__conteudo">
          <div className="VendaDoMes__conteudo__cardData">
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
              <Paper elevation={3} sx={{ padding: 2, bgcolor: '#9747FF', width: 165,mx:1 }}>
              
              <TextField type="date" onChange={(e)=>setData(new Date(e.target.value))}></TextField>
            </Paper>
            </div>
            <TabelaDeVendas vendas={vendas}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendaDosMes