import "./productList.css";
import Resume from '../../resume.pdf';
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Kreiraj & Navdihuj...</h1>
        <p className="pl-desc">
          Tole pred vami je osebni uvod, ki čaka na vaš poklič in moj poklic.
          Prijetna forma, prijazen slog ter ščepec vsebine.
          <hr/>
          <a href = {Resume} target = "_blank"> Prenesi CV</a>
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
