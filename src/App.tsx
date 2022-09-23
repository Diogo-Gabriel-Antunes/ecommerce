import React from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Carrinho from './pages/principal/carrinho';
import Home from './pages/principal/home';
import Login from './pages/principal/login';
import ProdutosPorCategoria from './pages/principal/Produtos';
import Curtidas from './pages/principal/curtidas';
import HomeDashboard from './pages/dashboard/home';




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
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
