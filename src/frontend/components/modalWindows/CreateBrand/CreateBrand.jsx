import styles from "./CreateBrand.module.css";


const CreateBrand = ({isOpen, onHide}) => {

    return (
    <div className={isOpen ? styles.create_brand : styles.create_brand_hidden}>

        <div className={styles.img_block}>
        <img
        className={styles.img}
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="img"
      />
      </div>

        <div className={styles.input_block}>
      <input placeholder="Введите бренд"></input>
      <button type="submit">Добавить</button>
      </div>

      <span className={styles.close} onClick={onHide}>
        x
      </span>
    </div>
    )
}

export default CreateBrand;