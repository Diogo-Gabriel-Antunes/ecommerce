
import { Card, Button } from '@mui/material'
import { useEffect, useState } from "react"
import './carrinho.css'
import { useParams,Navigate,useNavigate} from "react-router-dom"
import axios from 'axios';

import isAuthenticated from '../../../auth/auth'
import IProduto from "../../../interfaces/IProduto"
import { error } from "console"
import NavBar from '../../../components/principal/navbar';
import ItensCarrinho from '../../../components/principal/itensCarrinho';
import Footer from '../../../components/principal/footer';





const Carrinho =  (props) => {
  const parametros = useParams();
  const [produtos, setProdutos] = useState<IProduto[]|undefined>()
  const [logado,setLogado] = useState(true)
  if(produtos){
    for(const produto of produtos){
      if(!produto.quantidadeComprar){
        produto.quantidadeComprar = 1;
      }
    }

  }
   
  let subTotal = 0;
  let valorTotal = 0;
  let desconto = 0;
  if(produtos){
    for(const produto of produtos){
      subTotal = produto.preco * produto.quantidadeComprar + subTotal
      desconto = (subTotal * 10) / 100;
      valorTotal = subTotal - desconto
      
    }

  } 
  if(parametros.id === 'undefined'){
    parametros.id = 0
  } 
  useEffect(() => {
    axios.get(`http://localhost:8080/carrinhos/produtos/${parametros.id}`)
      .then( resposta => {    
           
          setProdutos(resposta.data.produtos)
          
      })//.catch(erro=>setLogado(false))
      isAuthenticated()
      .then(resposta=>{
        console.log(resposta)
        
        setLogado(resposta.data.auth)
        

      })
      .catch((error)=>error? '' : setLogado(false))
  }, [])
  
  

  return (
    <div>
      <div>
      {logado? "" : <Navigate to="/"/>}
        <NavBar />
      </div>
      <div>
        <hr />
      </div>
      <div className="carrinho__display">
        <div className="carrinho__NavBar">
          <Card sx={{ padding: 2 }}>
            <h2>Carrinho de compras ({produtos?.length})</h2>
          </Card>          
            <Card sx={{ mt: 2 }}>
              <ItensCarrinho produtos={produtos} setProdutos={setProdutos}  />
            </Card>
        </div>
        <div className="carrinho__Total">
          <Card>
            <div className="carrinho__Total__card">
              <h2>Total</h2>
              <div className="carrinho__Total__card__interna"> 
                <p>Sub-Total</p>
                <p>R${subTotal.toLocaleString()}</p>
              </div>
              <div className="carrinho__Total__card__interna">
                <p>Desconto</p>
                <p>R${desconto.toLocaleString()}</p>
              </div>
              <div className="carrinho__Total__card__interna">
                <p>Total</p>
                <p>R${valorTotal.toLocaleString()}</p>
              </div>
              <Button sx={{
                width: 200,
                mx: 10,
                my: 4
              }} variant="contained">Continuar</Button> 
            </div>
          </Card>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>

  )
}

export default Carrinho