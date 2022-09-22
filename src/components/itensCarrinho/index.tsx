import { Button, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@mui/material'
import IProduto from '../../interfaces/IProduto'
import axios from 'axios'
import nookies from 'nookies'
import jwt from 'jwt-decode'
import { useState } from 'react'
import Botoes from '../botoesAumentarediminuir'

interface Props {

  produtos: IProduto[] | undefined
  setProdutos:React.Dispatch<React.SetStateAction<IProduto[] | undefined>>
  
}


const ItensCarrinho = ({ produtos,setProdutos }: Props) => {
  const token = nookies.get('/').TOKEN
  let usuario = '';
  if(token){
    usuario = jwt(token)
  }
  


  const excluir = (produtoAhSerExcluido:IProduto)=>{
    axios.delete(`http://localhost:8080/carrinhos/${usuario.id.id}/${produtoAhSerExcluido.id}`,{
      headers:{"Authorization":`bearer ${token}`}
    })
      .then(()=>{
        const listaProdutos= produtos?.filter(produto=> produto.id !== produtoAhSerExcluido.id)
        setProdutos([...listaProdutos])
      })
  }
  return (
    <>{
      produtos?.map((produto:IProduto,index) => {
        
        return(
          <List sx={{ width: 802, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={produto.imagem} sx={{ width: 100, height: 100,borderRadius:0 }} />
            </ListItemAvatar>
            <div>
              <div className="carrinho_produto_display">
                <ListItemText
                  primary={produto.nome}
                  secondary={produto.descricao}
                  sx={{
                    ml: 4,
                    displayPrint: "block"
                  }}
                />
                <Button variant="contained" color="error" sx={{ height: 36 }} onClick={()=>excluir(produto)}>Deletar</Button>
              </div>
              <div >
                <ListItemText
                  primary={`Desconto: ${produto.desconto? produto.desconto : "0"} %`}

                  sx={{ ml: 4 }}
                />
                <div className="carrinho_contador">
                  <ListItemText
                    primary={`R$ ${produto.preco.toLocaleString()}`}

                    sx={{ ml: 4 }}
                  />
                  <div className="carrinho_produto_display_botoes">

                    <Botoes produtos={produtos} setProdutos={setProdutos} index={index} />
                  </div>
                </div>

              </div>
            </div>
          </ListItem>
          <Divider variant="inset" component="hr" />
        </List>
        )
        
      })
    }
    </>
  )
}

export default ItensCarrinho