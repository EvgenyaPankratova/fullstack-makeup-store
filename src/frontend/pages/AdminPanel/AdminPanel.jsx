import styles from "./AdminPanel.module.css";

const AdminPanel = () => {

    return (
    <div className={styles.admin_panel}>
        <h3>Панель админа</h3>
        <button>Добавить товар</button>
        <button>Удалить товар</button>
        <button>Добавить тип</button>
        <button>Добавить бренд</button>
    </div>
    )
}

export default AdminPanel;