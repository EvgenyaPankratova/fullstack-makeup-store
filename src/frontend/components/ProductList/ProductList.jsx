import styles from "./ProductList.module.css";
import { useContext } from "react";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = observer(() => {

    const {product} = useContext(Context);

    return (
    <div className={styles.productlist}>
        <ul className={styles.productlist_list}>
        {
            product.products.map(current_product => {
                return <ProductItem key={current_product.id} current_product={current_product}/>
           
            })
        }
        </ul>
    </div>
    )
})

export default ProductList;