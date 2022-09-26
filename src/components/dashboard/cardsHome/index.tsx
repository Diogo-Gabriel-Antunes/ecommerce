import { Card, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material"
import { useState } from "react"
import IProduto from "../../../interfaces/IProduto"
import { IVendas } from "../../../interfaces/IVendas"



const CardHome = (props)=>{
  
  return (
    <Card sx={{ padding: 2, width: 650,border:1,height:360,padding:2 }}>
							<h2 className="CardHome__Titulo">
                {props.titulo}
							</h2>
							<TableContainer component={Paper}>
								<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
									<TableHead>
										<TableRow sx={{bgcolor: '#5EF27E'}}>
											<TableCell>{ props.colunas[0]}</TableCell>
											<TableCell align="right">{props.colunas[1]}</TableCell>
											<TableCell align="right">{props.colunas[2]}</TableCell>
											<TableCell align="right">{props.colunas[3]}</TableCell>

										</TableRow>
									</TableHead>
									<TableBody>
										{props.itens.slice(0,5).map((item) => (
											<TableRow
												key={item.id}
												sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
											>
												<TableCell component="th" scope="row">
													{item.id}
												</TableCell>
												<TableCell align="right">{item.valor? item.valor : item.nome? item.nome : item.titulo}</TableCell>
												<TableCell align="right">{item.quantidade? item.quantidade : item.desconto? item.desconto : item.remetente}</TableCell>
												<TableCell align="right">{item.Data? item.Data : item.preco? item.preco.toLocaleString(): <Button variant="outlined">Ver </Button>}</TableCell>

											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</Card>
  )
}

export default CardHome