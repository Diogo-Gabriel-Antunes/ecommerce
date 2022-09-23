import BarraLateralDashBoard from "../../../components/dashboard/barralateral"
import './home.css'

const HomeDashboard = ()=>{
    return(
        <div className="home">
            <div className="homeDashBoard">
                <BarraLateralDashBoard/>
            </div>
            <div>
                <p>itens</p>
            </div>
        </div>
    )
}

export default HomeDashboard