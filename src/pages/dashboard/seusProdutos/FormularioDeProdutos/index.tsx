import { Box, Button, Card, Paper, TextField } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import BarraLateralDashBoard from "../../../../components/dashboard/barralateral"
import './editarproduto.css'
import nookies from 'nookies'

const FormularioProduto = ()=>{
  const parametros = useParams()
  const [nome,setNome] = useState()
  const [descricao,setDescricao] = useState()
  const [imagem,setImagem] = useState()
  const [preco,setPreco] = useState()
  const [desconto,setDesconto] = useState()
  const [categoria,setCategoria] = useState()
  const cookies = nookies.get('/').TOKEN
 

  useEffect(()=>{
    axios.get(`http://localhost:8080/produtos/${parametros.produtoId}`)
      .then(resposta=>{
        setNome(resposta.data.produto.nome)
        setDescricao(resposta.data.produto.descricao)
        setImagem(resposta.data.produto.imagem)
        setPreco(resposta.data.produto.preco)
        setDesconto(resposta.data.produto.Desconto)
        setCategoria(resposta.data.produto.categoria_id)
      })
  },[parametros])


  const aoSubmeterForm = (evento:React.FormEvent<HTMLFormElement>)=>{
    evento.preventDefault()

    if(parametros.produtoId){
      axios.put(`http://localhost:8080/produtos/${parametros.produtoId}`,{
        nome:nome,
        descricao:descricao,
        imagem:imagem,
        preco:preco,
        desconto:desconto,
        categoria_id:categoria
      },{headers:{"Authorization":`bearer ${cookies}`}})
      .then(()=> alert("Produto Atualizado com sucesso"))
    }else{
      axios.post(`http://localhost:8080/produtos`,{
        nome:nome,
        descricao:descricao,
        imagem:imagem,
        usuarioId:parametros.id,
        preco:preco,
        desconto:desconto,
        categoria_id:categoria
      },{headers:{"Authorization":`bearer ${cookies}`}})
      .then(()=> alert("Produto Criado com sucesso"))
    }
  }
  
    return(
    <div className="homeDashBoard">
      <div className="homeDashBoard__barralateral">
        <BarraLateralDashBoard/>
      </div>
      <div className="editarProduto__conteudo">
        <h1>Mudar informações do seu produto</h1>
        <Paper sx={{margin:8,padding:4}} elevation="20">
        <Box  component="form">
          <div className="editarProduto__display">

            <TextField label="Nome" sx={{margin:2}}  InputLabelProps={{shrink:true}} variant="filled"  value={nome} onChange={(e)=>setNome(e.target.value)}/>
            <TextField label="descrição" sx={{margin:2}} InputLabelProps={{shrink:true}}  variant="filled" value={descricao} onChange={(e)=>setDescricao(e.target.value)}/>
            <TextField label="imagem" sx={{margin:2}} InputLabelProps={{shrink:true}} variant="filled"value={imagem} onChange={(e)=>setImagem(e.target.value)}/>
            <TextField label="Preço" sx={{margin:2}} InputLabelProps={{shrink:true}} variant="filled" value={preco} onChange={(e)=>setPreco(e.target.value)}/>
            <TextField label="Desconto" sx={{margin:2}} InputLabelProps={{shrink:true}} variant="filled"value={desconto? desconto : 0} onChange={(e)=>setDesconto(e.target.value)}/>
            <TextField label="Categoria" sx={{margin:2}} InputLabelProps={{shrink:true}} variant="filled" value={categoria} onChange={(e)=>setCategoria(e.target.value)}/>
          </div>
          <Button variant="contained" sx={{margin:2}} onClick={e=>aoSubmeterForm(e)}>Atualizar</Button>
          </Box>
        </Paper>
      </div>
      
    </div>
    )
}


export default FormularioProduto