import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, ImageListItem, Button } from "@mui/material"
import { Link } from "react-router-dom"
import './tabelaDeProdutos.css'


function dataAtualFormatada(dataASerFormatada: Date) {
  const data = new Date(dataASerFormatada)
  const dia = data.getDate().toString().padStart(2, '0')
  const mes = (data.getMonth() + 1).toString().padStart(2, '0') //+1 pois no getMonth Janeiro começa com zero.
  const ano = data.getFullYear();
  return dia + "/" + mes + "/" + ano;
}

const TabelaDeProdutos = (props) => {

  return (
    <div className="TabelaDeVendas__container">
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead sx={{ bgcolor: '#9747FF' }}>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Nome</TableCell>
                <TableCell align="right">Imagem</TableCell>
                <TableCell align="right">Preco</TableCell>
                <TableCell align="right">Descricao</TableCell>
                <TableCell align="right">Data</TableCell>
                <TableCell align="right">Editar</TableCell>
                <TableCell align="right">Deletar</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {props.produtos ? props.produtos.slice(0, 10).map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="right">{item.nome}</TableCell>
                  <TableCell align="right"><img
                    src={`${item.imagem}`}
                    srcSet={`${item.imagem}`}
                    alt={item.nome}
                    loading="lazy"
                    className="tabelaDeProdutos__Imagem"
                  /></TableCell>
                  <TableCell align="right">{item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                  <TableCell align="right">{item.descricao}</TableCell>
                  <TableCell align="right">{dataAtualFormatada(item.createdAt)}</TableCell>
                  <TableCell align="right"><Link to={`/login/dashboard/1/seusprodutos/${item.id}`} className="homeDashBoard__Link"><Button variant="contained">Editar</Button></Link></TableCell>
                  <TableCell align="right"><Button variant="contained" color="error" onClick={()=>props.excluir(item)}>Deletar</Button></TableCell>
                </TableRow>
              )) : "Sem vendas nesse mes"}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default TabelaDeProdutos