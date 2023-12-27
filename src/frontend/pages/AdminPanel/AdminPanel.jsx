import { useState } from "react";
import CreateBrand from "../../components/modalWindows/CreateBrand/CreateBrand";
import CreateProduct from "../../components/modalWindows/CreateProduct/CreateProduct";
import CreateType from "../../components/modalWindows/CreateType/CreateType";
import DeleteProduct from "../../components/modalWindows/DeleteProduct/DeleteProduct";
import styles from "./AdminPanel.module.css";

const AdminPanel = () => {

    const [createBrandVisible, setCreateBrandVisible] = useState(false);
    const [createTypeVisible, setCreateTypeVisible] = useState(false);
    const [createProductVisible, setCreateProductVisible] = useState(false);
    const [deleteProductVisible, setDeleteProductVisible] = useState(false);

    return (
    <div className={styles.admin_panel}>
        <h3>Панель админа</h3>
        <button onClick={() => {setCreateProductVisible(true)}}>Добавить товар</button>
        <button onClick={() => {setDeleteProductVisible(true)}}>Удалить товар</button>
        <button onClick={() => {setCreateTypeVisible(true)}}>Добавить тип</button>
        <button onClick={() => {setCreateBrandVisible(true)}}>Добавить бренд</button>

        <CreateBrand isOpen={createBrandVisible} onHide = {() => setCreateBrandVisible(false)}/>
        <CreateType isOpen={createTypeVisible} onHide = {() => setCreateTypeVisible(false)}/>
        <CreateProduct isOpen={createProductVisible} onHide = {() => setCreateProductVisible(false)}/>
        <DeleteProduct isOpen={deleteProductVisible} onHide = {() => setDeleteProductVisible(false)}/>
    </div>
    )
}

export default AdminPanel;