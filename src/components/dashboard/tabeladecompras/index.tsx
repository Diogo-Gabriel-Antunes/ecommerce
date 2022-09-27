import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material"
import { Link } from "react-router-dom"

function dataAtualFormatada(dataASerFormatada: Date) {
  const data = new Date(dataASerFormatada)
  const dia = data.getDate().toString().padStart(2, '0')
  const mes = (data.getMonth() + 1).toString().padStart(2, '0') //+1 pois no getMonth Janeiro começa com zero.
  const ano = data.getFullYear();
  return dia + "/" + mes + "/" + ano;
}

const TabelaDeCompras = (props)=>{
  return(
    <div>
      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650,width:1280 }} size="small" aria-label="a dense table">
            <TableHead sx={{ bgcolor: '#9747FF' }}>
              <TableRow>
                <TableCell>Numero do pedido</TableCell>
                <TableCell align="right">Data</TableCell>
                <TableCell align="right">ProdutoId</TableCell>
                <TableCell align="right">Quantidade</TableCell>
                <TableCell align="right">Valor</TableCell>
                <TableCell align="right">Status</TableCell>
                

              </TableRow>
            </TableHead>
            <TableBody>
              {props.compras ? props.compras.slice(0, 10).map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="right">{dataAtualFormatada(item.Data)}</TableCell>
                  <TableCell align="right">{item.produtoId}</TableCell>
                 
                  <TableCell align="right">{item.quantidade}</TableCell>
                  <TableCell align="right">{item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                  <TableCell align="right">{item.status}</TableCell>
                  
                 
                </TableRow>
              )) : "Sem vendas nesse mes"}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default TabelaDeCompras