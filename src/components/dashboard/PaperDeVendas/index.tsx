import { Paper } from "@mui/material"
import './paperDevendas.css'

const PaperDeVendas = (props) => {
  return (
    <div className="dashboarddevendas_div">
      <Paper elevation={3} sx={{ padding: 2, bgcolor: '#5EF27E' }}>
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