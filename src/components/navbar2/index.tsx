import { Link } from 'react-router-dom'
import './navbar2.css'

const NavBarOpcoes = ()=>{
  return(
    <div className='Opcoes'>
      <ul className='Opcoes__Lista'>
        <li className='Opcoes__Lista__li'><Link className='opcoes_link' to="/">Home</Link> <i className='bx bx-chevron-down' ></i></li>
        <li className='Opcoes__Lista__li'>
          Produtos
          <i className='bx bx-chevron-down' ></i>
          <ul className='lista_Interna'>
            <li className='lista_Interna_li'><Link to="/produtos/eletronicos" className='opcoes_link'>Eletronicos</Link></li>
            <li className='lista_Interna_li'><Link to="/produtos/computadores" className='opcoes_link'>Computadores </Link></li>
            <li className='lista_Interna_li'><Link to="/produtos/celulares" className='opcoes_link'>Celulares </Link></li>
          </ul>
         </li >
        <li className='Opcoes__Lista__li'>
          Contato <i className='bx bx-chevron-down' ></i>
          <ul className='lista_Interna'>
            <li className='lista_Interna_li'><Link to="faleconosco" className='opcoes_link'>Fale Conosco</Link></li>
            <li className='lista_Interna_li'><Link to="faleconosco" className='opcoes_link'>Reclame aqui</Link></li>
          </ul>
        </li>
        <li className='Opcoes__Lista__li'>Serviços <i className='bx bx-chevron-down' ></i></li>
      </ul>
      <hr />
    </div>
  )
}

export default NavBarOpcoes