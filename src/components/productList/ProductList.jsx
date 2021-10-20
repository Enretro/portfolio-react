import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Kreiraj & Navdihuj...</h1>
        <p className="pl-desc">
          Tole je osebni portfelj, ki čaka na vaš pokli(č)c.
          Prijetna forma in prijazen slog z bogastvom vsebine.
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
