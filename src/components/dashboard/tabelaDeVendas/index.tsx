import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"

import './tabelaDeVendas.css'

function dataAtualFormatada(dataASerFormatada:Date){
      const data = new Date(dataASerFormatada)
      const dia  = data.getDate().toString().padStart(2, '0')
      const mes  = (data.getMonth()+1).toString().padStart(2, '0') //+1 pois no getMonth Janeiro começa com zero.
      const ano  = data.getFullYear();
  return dia+"/"+mes+"/"+ano;
}

const TabelaDeVendas = (props)=>{
  
  return(
    <div className="TabelaDeVendas__container">
      <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead sx={{bgcolor: '#5EF27E'}}>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">ProdutoId</TableCell>
            <TableCell align="right">Valor(R$)</TableCell>
            <TableCell align="right">Data</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {props.vendas.slice(0,10).map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="right">{item.produtoId}</TableCell>
              <TableCell align="right">{item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
              <TableCell align="right">{dataAtualFormatada(item.Data)}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  )
}

export default TabelaDeVendas