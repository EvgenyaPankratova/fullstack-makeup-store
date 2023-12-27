import { useContext } from "react";
import styles from "./CreateProduct.module.css";
import { Context } from "../../../..";


const CreateProduct = ({isOpen, onHide}) => {

    const {product} = useContext(Context);

    return (
        <div className={isOpen ? styles.create_product : styles.create_product_hidden}>

        <div className={styles.img_block}>
        <img
        className={styles.img}
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="img"
      />
      </div>

        <div className={styles.input_block}>
      <input placeholder="Введите "></input>
      <button type="submit">Добавить</button>
      </div>

      <span className={styles.close} onClick={onHide}>
        x
      </span>
    </div>
    )
}

export default CreateProduct;