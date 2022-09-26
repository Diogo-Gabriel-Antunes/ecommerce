import { BarElement, Chart } from 'chart.js'
import BarraLateralDashBoard from "../../../components/dashboard/barralateral"

import './home.css'
import { useEffect, useState } from "react"
import axios from "axios"
import _ from 'lodash'
import { Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useParams } from 'react-router'
import CardHome from '../../../components/dashboard/cardsHome'
import { IVendas } from '../../../interfaces/IVendas'
import IProduto from '../../../interfaces/IProduto'

const HomeDashboard = () => {

	const [infosVendas, setInfosVendas] = useState<IVendas[] | undefined>([])
	const [produtos, setProdutos] = useState<IProduto[] | undefined>([])
	const [infosCompras, setInfosCompras] = useState<IVendas[] | undefined>([])
	const [mensagensRecebidas, setMensagensRecebidas] = useState<IVendas[] | undefined>([])
	const parametros = useParams()




	useEffect(() => {
		axios.get(`http://localhost:8080/vendas/usuario/${parametros.id}`)
			.then(resposta => setInfosVendas(resposta.data.vendas))
		axios.get(`http://localhost:8080/produtos/usuario/${parametros.id}`)
			.then(resposta => setProdutos(resposta.data.produtosPorUsuario))
		axios.get(`http://localhost:8080/compras/usuario/${parametros.id}`)
			.then(resposta => setInfosCompras(resposta.data.compras))
		axios.get(`http://localhost:8080/mensagens/recebidas/usuario/${parametros.id}`)
			.then(resposta => setMensagensRecebidas(resposta.data.mensagens))
	}, [])


	return (
		<div className="homeDashBoard">
			<div className="homeDashBoard__barralateral">
				<BarraLateralDashBoard />
			</div>
			<div className="homeDashBoard__conteudo">
				<div>

					<h1>Aqui onde voce vai acessar todas suas informações </h1>
					<h2 className="homeDashBoard__conteudo__h2">Suas Informações :</h2>

				</div>
				<div className='homeDashBoard__grid'>
					<div>
						<CardHome titulo="Ultimas vendas" itens={infosVendas} colunas={["ID", "Valor", "Quantidade", "Data da venda"]} />
					</div>
					<div>
						<CardHome titulo="Produtos" itens={produtos} colunas={["ID", "Nome", "Desconto", "Preco"]} />
					</div>
					<div>
						<CardHome titulo="Ultimas Compras" itens={infosCompras} colunas={["ID", "Valor", "Quantidade", "Data"]} />
					</div>
					<div>
						<CardHome titulo="Mensagens Recebidas" itens={mensagensRecebidas} colunas={["ID", "Titulo", "Remetente", "Ver"]} />
					</div>
				</div>

			</div>
		</div>
	)
}

export default HomeDashboard