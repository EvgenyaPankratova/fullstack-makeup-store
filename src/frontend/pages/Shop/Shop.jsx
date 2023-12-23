
import ProductList from "../../components/ProductList/ProductList";
import TypeBar from "../../components/TypeBar/TypeBar";
import Brands from "../Brands/Brands";
import styles from "./Shop.module.css";

const Shop = () => {

    return (
    <div className={styles.shop}>
        <h1>Каталог</h1>
        <hr></hr>

        <div className={styles.shop_container}>
        <TypeBar/>
        <Brands/>
        <ProductList/>
        </div>

    </div>
    )
}

export default Shop;