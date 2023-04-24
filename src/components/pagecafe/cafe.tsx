import "./cafe.css";
import Card from "./card";


function cafe() {
  return (
    <main className="mainCafe">
      <div className="detalles">
        <span>Disfrutalos</span>
        <h1>Conoce nuestras bebidas y alimentos de temporada</h1>
        <div className="be">
          <h3>Bebidas</h3>
        </div>
      </div>
      <div className="carta">
        <Card />
      </div>
    </main>
  );
}

export default cafe;
