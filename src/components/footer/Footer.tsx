import './Footer.css'
import logo from '../../img/logo.png'
function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__logo">
                <img src={logo} alt="" />
            </div>
            <div className="footer__links">
                <ul>
                    <li><a href="#">AUDIO Y SUBTITULOS</a></li>
                    <li><a href="#">MEDIA CENTER</a></li>
                    <li><a href="#">TERMINOS DE USO</a></li>
                    <li><a href="#">CONTACTO</a></li>
                </ul>
                <ul>    
                    <li><a href="#">CENTRO DE AYUDA</a></li>
                    <li><a href="#">PRENSA</a></li>
                    <li><a href="#">EMPLEOS</a></li>
                    <li><a href="#">COOKIES</a></li>

                </ul>
                <ul>
                    <li><a href="#">TARJETAS DE REGALO</a></li>
                    <li><a href="#">ACERCA DE</a></li>
                    <li><a href="#">PRIVACIDAD</a></li>
                    <li><a href="#">PRUEBAS DE INTERES</a></li>
                </ul>
                <ul>
                    <li><a href="#">CENTRO DE AYUDA</a></li>
                    <li><a href="#">PRENSA</a></li>
                    <li><a href="#">EMPLEOS</a></li>
                    <li><a href="#">COOKIES</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer