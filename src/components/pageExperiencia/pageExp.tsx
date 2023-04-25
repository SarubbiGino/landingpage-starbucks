import "./pageExp.css";
import EXP1 from "../../img/exp1.png";
import EXP2 from "../../img/exp2.png";
import EXP3 from "../../img/exp3.png";

function pageExp() {
  return (
    <main className="mainExp">
      <div className="titulos">
        <h1>Experiencias Starbucks</h1>
      </div>
      <div className="sub">
        <h1>
          Para cada momento hay una forma de vivir la Experiencia Starbucks como
          vos quieras.
        </h1>
      </div>
      <div className="contenedorEXP">
        <div className="contenedorEXP1">
          <div>
            <h1>In Store</h1>
            <h3>
              En nuestras tiendas te esperan nuestros baristas capacitados para
              ofrecerte una bebida muy especial. El ambiente cálido y los
              detalles de nuestros productos elaborados artesanalmente hacen que
              la experiencia sea única e inigualable.
            </h3>
          </div>
          <img src={EXP1} alt="" />
        </div>
        <div className="contenedorEXP1">
          <div>
            <h1> Drive Thru</h1>
            <h3>
              Retirá tu bebida favorita y viví la Experiencia Starbucks sin
              bajarte del auto.
            </h3>
          </div>
          <img src={EXP2} alt="" />
        </div>
        <div className="contenedorEXP1">
          <div>
            <h1> Delivery</h1>
            <h3>
              Los clientes pueden pedir sus bebidas y productos favoritos donde
              sea que estén con operadores logísticos al servicio como Pedidos
              Ya.
            </h3>
          </div>
          <img src={EXP3} alt="" />
        </div>
      </div>
    </main>
  );
}

export default pageExp;
