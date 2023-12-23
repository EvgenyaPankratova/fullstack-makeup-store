import { observer } from "mobx-react-lite";
import styles from "./TypeBar.module.css";
import { useContext } from "react";
import { Context } from "../../..";

const TypeBar = observer(() => {

    const {product} = useContext(Context);

    return (
    <div className={styles.typebar}>
        <h3 className={styles.typebar_title}>Категории</h3>
        <ul className={styles.typebar_list}>
        {
            product.types.map(type => {
                return <li key={type.id} className={type.id === product.selectedType.id ? styles.typebar_list_item_active : styles.typebar_list_item}
                
                onClick={() => product.setSelectedType(type)}
                >{type.name}</li>
            })
        }
        </ul>
    </div>
    )
})

export default TypeBar;