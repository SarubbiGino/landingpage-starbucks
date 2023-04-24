import "./Main.css";
import nara from "../../img/orange.jpg";
import logo from "../../img/logo2.png";
import LogoInstagram from '../../img/instagram.png';
import LogoFacebook from '../../img/facebook.png';
import LogoTwitter from '../../img/twitter.png';

function Main() {
  return (
    <main>
      <div className="overlay">
        <div className="redes">
          <img src={LogoInstagram} alt="" className="logo" />
          <img src={LogoFacebook} alt="" className="logo" />
          <img src={LogoTwitter} alt="" className="logo" />
        </div>
        <div className="detalles">
        <h1>STARBUCKS</h1>
        <img src={logo} alt="" className="logo" />
        </div>
      </div>
      <img src={nara} alt="" />
    </main>
  );
}

export default Main;
