import { Card, Paper, TextField } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import BarraLateralDashBoard from "../../../components/dashboard/barralateral"
import TabelaDeProdutos from "../../../components/dashboard/tabelaDeProdutos"
import nookies from 'nookies'
import './seusprodutos.css'


const SeusProdutos = () => {
  const [busca,setBusca] = useState('')
  const parametros = useParams()
  const [produtos,setProdutos] = useState([])
  const cookies = nookies.get('/').TOKEN
  useEffect(()=>{
    axios.get(`http://localhost:8080/produtos/usuario/${parametros.id}`)
      .then(resposta=> setProdutos(resposta.data.produtosPorUsuario))
  },[])

  const produtosFiltrados = produtos.filter((produto)=>produto.nome.startsWith(busca))

  const excluir = (produtoASerExcluido)=>{
  axios.delete(`http://localhost:8080/produtos/${produtoASerExcluido.id}`,{headers:{"Authorization":`bearer ${cookies}`}})
      .then(()=>{
        const novaListaDeProdutos = produtos.filter(produto=>produto.id !== produtoASerExcluido.id)
        setProdutos([...novaListaDeProdutos])
      })
  }
  return (
    <div className="homeDashBoard">
      <div className="homeDashBoard__barralateral">
        <BarraLateralDashBoard />
      </div>
      <div className="seusprodutos__pesquisa">
        
        <TextField label="Pesquise um produto" sx={{ mx: 4, width: 1480, my: 4 }} value={busca} onChange={(event)=>setBusca(event.target.value)}></TextField>
        <Paper sx={{mx:4,padding:2}} elevation="8">
        <h4>Seus Produtos</h4>
          <TabelaDeProdutos produtos={produtosFiltrados} excluir={excluir} />
        </Paper>
      </div>

    </div>
  )
}

export default SeusProdutos