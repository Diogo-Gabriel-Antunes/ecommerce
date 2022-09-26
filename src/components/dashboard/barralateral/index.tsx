import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ReplyIcon from '@mui/icons-material/Reply';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useParams } from 'react-router-dom';


const BarraLateralDashBoard = () => {
  const [listaMensagens, setListaMensagens] = React.useState(false)
  const [listaProdutos, setListaProdutos] = React.useState(false)
  const [listaVendas, setListaVendas] = React.useState(false)
  const [listaCompras, setListaCompras] = React.useState(false)
  const parametros = useParams()
  

  const handleClick = (valor, set) => {
    set(!valor);
  };

  return (
    <div>
      <div>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: '#5EF27E', height: "100vh", borderRight: 1 }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader" sx={{ bgcolor: '#5EF27E' }}>
              DashBoard Do usuario
            </ListSubheader>
          }
        > 
        <Link to={`/login/dashboard/${parametros.id}`} className="homeDashBoard__Link">
        <ListItemButton >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
            
          </ListItemButton>
        </Link>
         
          <ListItemButton onClick={() => handleClick(listaProdutos, setListaProdutos)}>
            <ListItemIcon>
              <Inventory2Icon />
            </ListItemIcon>
            <ListItemText primary="Produtos" />
            {listaProdutos ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={listaProdutos} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to={`/login/dashboard/${parametros.id}/seusprodutos`} className="homeDashBoard__Link">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ReplyIcon />
                  </ListItemIcon>
                  <ListItemText primary="Seus produtos" />
                </ListItemButton>
              </Link>
              <Link to={`/login/dashboard/${parametros.id}/novoproduto`} className="homeDashBoard__Link">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary="Adicionar Produto" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
          <ListItemButton onClick={() => handleClick(listaVendas, setListaVendas)}>
            <ListItemIcon>
              <ProductionQuantityLimitsIcon />
            </ListItemIcon>
            <ListItemText primary="Vendas" />
            {listaVendas ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={listaVendas} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to={`/login/dashboard/${parametros.id}/dashboardvendas`} className="homeDashBoard__Link">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="DashBoard de vendas" />
                </ListItemButton>

              </Link>
              <Link to={`/login/dashboard/${parametros.id}/vendasdomes`} className="homeDashBoard__Link">

                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <SellIcon />
                  </ListItemIcon>
                  <ListItemText primary="Vendas do mes" />
                </ListItemButton>

              </Link>
            </List>
          </Collapse>
          <ListItemButton onClick={() => handleClick(listaCompras, setListaCompras)}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Compras" />
            {listaCompras ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={listaCompras} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>

              <Link to={`/login/dashboard/${parametros.id}/ultimascompras`} className="homeDashBoard__Link">

                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ShoppingBasketIcon />
                  </ListItemIcon>
                  <ListItemText primary="Ultimas Compras" />
                </ListItemButton>

              </Link>
            </List>
          </Collapse>
          <ListItemButton onClick={() => handleClick(listaMensagens, setListaMensagens)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Mensagens" />
            {listaMensagens ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={listaMensagens} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to={`/login/dashboard/${parametros.id}/enviarmensagem`} className="homeDashBoard__Link">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ReplyIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mensagem Recebidas" />
                </ListItemButton>
              </Link>
              <Link to={`/login/dashboard/${parametros.id}/mensagensenviadas`} className="homeDashBoard__Link">

                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <MarkEmailReadIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mensagem Enviadas" />
                </ListItemButton>
              </Link>
              <Link to={`/login/dashboard/${parametros.id}/enviarmensagem`} className="homeDashBoard__Link">

                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary="Enviar Mensagem" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>

        </List>
      </div>
    </div>
  )
}

export default BarraLateralDashBoard