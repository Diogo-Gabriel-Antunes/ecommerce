import React from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Carrinho from './pages/carrinho';
import isAuthenticated from './auth/auth'
import Home from './pages/home';
import Login from './pages/login';
import ProdutosPorCategoria from './pages/Produtos';
import nookies from 'nookies'




function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/produtos/:categoria' element={<ProdutosPorCategoria/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route path='/carrinho/:id' element={<Carrinho/>}/>
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
