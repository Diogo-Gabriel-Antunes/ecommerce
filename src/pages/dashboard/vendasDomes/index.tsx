import BarraLateralDashBoard from "../../../components/dashboard/barralateral"
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from "@mui/material";


const VendaDosMes = ()=>{
  return(
    <div className="homeDashBoard">
      <div className="homeDashBoard__barralateral">
        <BarraLateralDashBoard/>
      </div>
      <div className="homeDashBoard__conteudo">
      <h1>DashBoard De Vendas do mes</h1>
        <TextField sx={{ml:18,mt:8}} type="date"></TextField>
      </div>
    </div>
  )
}

export default VendaDosMes