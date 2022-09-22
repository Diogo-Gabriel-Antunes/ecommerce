export default interface IProduto{
  id: number
  nome: string
  preco: number
  imagem: string
  descricao: string
  desconto: any
  quantidade: number
  createdAt: string
  updatedAt: string
  categoria_id: number,
  quantidadeComprar:number,
  opcoes:string
}