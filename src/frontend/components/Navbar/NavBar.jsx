
import { useContext } from "react";
import styles from "./NavBar.module.css";

import logo from "../../img/lolgo.png"
import { BRANDS_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react";
import { NavLink } from "react-router-dom";
import { Context } from "../../..";


const NavBar = observer( () => {

    const {user} = useContext(Context)
        
    return (
      
        
            <nav className={styles.navbar}>

                <NavLink to={SHOP_ROUTE}><img className={styles.navbar_logo} src={logo} alt="logo"></img></NavLink>

                <div className={styles.navbar_name}>
                   <div>Космо</div>
                   <div>Дива © </div>  
                </div>

                <ul className={styles.navbar_list}>
                <NavLink to={SHOP_ROUTE}><li className={styles.navbar_list_item}>Товары</li></NavLink>
                    <NavLink to={BRANDS_ROUTE}><li className={styles.navbar_list_item}>Бренды</li></NavLink>
                    <li className={styles.navbar_list_item}><a href="#">Отзывы</a></li>
                    <li className={styles.navbar_list_item}><a href="#">Контакты</a></li>
                </ul>

                {user.isAuth ? 

                <div className={styles.navbar_auth_true}>
                <button className={styles.navbar_auth_admin}>Админ панель</button> 
                <button className={styles.navbar_auth_exit}>Выйти</button>
                </div> 
                
                : 
                
                <button className={styles.navbar_auth} onClick={() => user.setIsAuth(true)}>Войти / Регистрация</button>
                }

                
    </nav>
      

    )
})

export default NavBar;