import React from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Carrinho from './pages/principal/carrinho';
import Home from './pages/principal/home';
import Login from './pages/principal/login';
import ProdutosPorCategoria from './pages/principal/Produtos';
import Curtidas from './pages/principal/curtidas';
import HomeDashboard from './pages/dashboard/home';
import DashBoardDeVendas from './pages/dashboard/dashboardVendas';
import VendaDosMes from './pages/dashboard/vendasDomes';
import SeusProdutos from './pages/dashboard/seusProdutos';

import FormularioProduto from './pages/dashboard/seusProdutos/FormularioDeProdutos';
import UltimasCompras from './pages/dashboard/ultimasCompras';




function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/produtos/:categoria' element={<ProdutosPorCategoria/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route path='/carrinho/:id' element={<Carrinho/>}/>
        <Route path='/curtidas' element={<Curtidas/>}/>
        <Route path='/login/dashboard/:id' element={<HomeDashboard/>}/>
        <Route path='/login/dashboard/:id/dashboardvendas' element={<DashBoardDeVendas/>}/>
        <Route path='/login/dashboard/:id/vendasdomes' element={<VendaDosMes/>}/>
        <Route path='/login/dashboard/:id/seusprodutos' element={<SeusProdutos/>}/>
        <Route path='/login/dashboard/:id/seusprodutos/:produtoId' element={<FormularioProduto/>}/>
        <Route path='/login/dashboard/:id/novoproduto' element={<FormularioProduto/>}/>
        <Route path='/login/dashboard/:id/ultimascompras' element={<UltimasCompras/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
