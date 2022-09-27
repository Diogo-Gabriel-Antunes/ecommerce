import { Paper } from "@mui/material"
import './paperDevendas.css'

const PaperDeVendas = (props) => {
  
  return (
    
    <div className={props.padrao? "dashboarddevendas_div": "dashboarddevendas_divcom5"}>
      <Paper elevation={3} sx={{ padding: 2, bgcolor: '#9747FF' }}>
        <div className="dashboarddevendas__divpaper">
          {props.icone}
          <h4>{props.titulo} </h4>
          <div>
            <p> {` ${props.valor}`}</p>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default PaperDeVendas