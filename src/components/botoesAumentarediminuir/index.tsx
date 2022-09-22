import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import IProduto from "../../interfaces/IProduto"

interface Props{
  produtos:IProduto[],
  setProdutos:React.Dispatch<React.SetStateAction<IProduto[] | undefined>>,
  index:number
 
}
const Botoes = ({produtos,setProdutos,index}:Props) => {
  const [quantidade,setQuantidade] = useState(1)
  
  useEffect(()=>{

    setProdutos([...produtos],[produtos[index].quantidadeComprar = quantidade])
  },[quantidade])

  
  
  return (
    <>
      <Button variant="outlined" sx={{ height: 20, minWidth: 0, width: 2, mt: 2, mx: 1 }} onClick={() => {
        if(quantidade > 0){
          setQuantidade(quantidade -1)

        }
      }}>-</Button>
      <p >{quantidade}</p>
      <Button variant="outlined" sx={{ height: 20, minWidth: 0, width: 2, mt: 2, mx: 1 }} onClick={() => {
        setQuantidade(quantidade +1)
      }}>+</Button>
    </>
  )
}

export default Botoes