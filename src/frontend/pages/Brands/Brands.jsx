import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../..";
import styles from "./Brands.module.css";

const Brands = observer(() => {

    const {product} = useContext(Context);

    return (
    <div className={styles.brands}>
        <h3 className={styles.brands_title}>Бренды</h3>
        <ul className={styles.brands_list}>
        {
            product.brands.map(brand => {
                return <li key={brand.id} className={brand.id === product.selectedBrand.id ? styles.brands_list_item_active : styles.brands_list_item}
                
                onClick={() => product.setSelectedBrand(brand)}
                >{brand.name}</li>
            })
        }
        </ul>
    </div>
    )
})

export default Brands;