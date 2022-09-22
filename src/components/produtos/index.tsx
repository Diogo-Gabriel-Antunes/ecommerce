import IProduto from '../../interfaces/IProduto'
import './produtos.css'
import axios from 'axios'
import nookies from 'nookies'
import jwt from 'jwt-decode'

interface Props {
  titulo: string,
  produtos: IProduto[]|undefined
}

const Produtos = (props: Props) => {
  const adicionarItem = (item:IProduto)=>{
    const token = nookies.get('/').TOKEN
    const usuario = jwt(token)
    
    axios.post(`http://localhost:8080/carrinhos/${usuario.id.id}/${item.id}/`,{},{
      headers:{"Authorization":`bearer ${token}`}
    }).then(resposta=>console.log(resposta))
    
  }

  return (
    <div className='produtos'>
      <h2>{props.titulo}</h2>
      <div className='produtos__container'>
      {props.produtos? props.produtos.map(function (item) {
        return (
          
            <div key={item.id}>
              <div className='produto'>
                <img src={item.imagem} alt="" />
                <p className='produto__nome'>{item.nome}</p>
                <p className='produto__descricao'>{item.descricao}</p>
                <select name="" id="" className='produto__select'>
                  <option value="default">Selecione a Opcão</option>
                </select>
                <p className='produto__preco'>R${item.preco.toLocaleString()},00 </p>
                <div>
                  <button className='produto__produtoCarrinho' onClick={()=>adicionarItem(item)}>Adicionar ao carrinho</button>
                  <button className='produto__botaoCurtir'><i className='bx bx-heart' ></i></button>
                </div>
              </div>
            </div>
          
        )
      }):<p></p>}
      </div>
    </div>
  )
}

export default Produtos