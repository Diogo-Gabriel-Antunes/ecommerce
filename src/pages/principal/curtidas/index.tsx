import axios from "axios"
import { useEffect, useState } from "react"
import Banner from "../../../components/principal/banner"
import NavBar from "../../../components/principal/navbar"
import NavBarOpcoes from "../../../components/principal/navbar2"
import Produtos from "../../../components/principal/produtos"
import IProduto from "../../../interfaces/IProduto"


function converteJson(arrayProdutos){
    let array = []
    
    
    for (let index = 0; index < arrayProdutos.length -1; index++) {
        const produto = JSON.parse(arrayProdutos[index]);
        array.push(produto)
        
    }
    return array
}
const Curtidas = () => {
    const produtosLS = localStorage.getItem('LikeItens')
    const arrayProdutos = produtosLS?.split(';') ? produtosLS?.split(';') : []
    const produtos = converteJson(arrayProdutos)
    
    
    
    
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <NavBarOpcoes />
            </div>
            <div>
                <Banner/>
            </div>
            <div>
                <Produtos titulo="Produtos curtidos" produtos={produtos}/>
            </div>
        </div>
    )
}

export default Curtidas