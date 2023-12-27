import styles from "./CreateType.module.css";


const CreateType = ({isOpen, onHide}) => {

    return (
        <div className={isOpen ? styles.create_type : styles.create_type_hidden}>

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

export default CreateType;