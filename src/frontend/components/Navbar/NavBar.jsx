
import { useContext } from "react";
import styles from "./NavBar.module.css";

import logo from "../../img/lolgo.png";
import basket from "../../img/basket.png";
import { ADMIN_ROUTE, BRANDS_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../../..";


const NavBar = observer( () => {
    const navigate = useNavigate();

    const {user} = useContext(Context)
        
    return (
      
        
            <nav className={styles.navbar}>

               

                <div className={styles.navbar_name}>
                <NavLink to={SHOP_ROUTE}><img className={styles.navbar_logo} src={logo} alt="logo"></img></NavLink>
                    <div className={styles.navbar_name_text}>
                   <div>Космо</div>
                   <div>Дива © </div> 
                   </div> 
                </div>


                <div>
                <ul className={styles.navbar_list}>
                <NavLink to={SHOP_ROUTE}><li className={styles.navbar_list_item}>Товары</li></NavLink>
                    <NavLink to={BRANDS_ROUTE}><li className={styles.navbar_list_item}>Бренды</li></NavLink>
                    <li className={styles.navbar_list_item}><a href="#">Акции</a></li>
                    <li className={styles.navbar_list_item}><a href="#">Контакты</a></li>
                </ul>
                </div>

                {user.isAuth ? 

                <div className={styles.navbar_auth_true}>
                <button className={styles.navbar_auth_admin} onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</button> 
                <button className={styles.navbar_auth_exit} onClick={() => navigate(LOGIN_ROUTE)}>Выйти</button>
                </div> 
                
                : 
                
                <button className={styles.navbar_auth} onClick={() => user.setIsAuth(true)}>Войти / Регистрация</button>
                }

                <div className={styles.navbar_basket_block}>
                    <img className={styles.navbar_basket} src={basket} alt="basket"></img> 
                </div>

                
    </nav>
      

    )
})

export default NavBar;