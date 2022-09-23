import sacola from '../../../assets/sacola.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_firstContainer'>
        <div className='footer_logo'>
          <ul>
            <li className='footer_marca'>
              <img src={sacola} alt="" />
             <p >Ecommerce</p>
          </li>
          <li><p>Description copmany</p></li>
          </ul>
          
          
        </div>
        <div className='footer_socialmedia'>
          <h2>Social Media</h2>
          <ul>
            <li className='footer_lista'>facebook.com/@facebook</li>
            <li className='footer_lista'>instagram.com/@instagram</li>
            <li className='footer_lista'>linkedin.com/@linkedin</li>
            <li className='footer_lista'>twitter.com/@twitter</li>
          </ul>
        </div>
        <div className='footer_socialmedia'>
          <h2>Contato</h2>
          <ul>
            <li className='footer_lista'>email@email.com.br</li>
            <li className='footer_lista'>(99)9999-9999</li>
            
          </ul>
        </div>
      </div>


    </div>
  )
}

export default Footer