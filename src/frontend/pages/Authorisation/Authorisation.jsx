import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";
import styles from "./Authorisation.module.css";

const Autorisation = () => {

    const location = useLocation(); //хук useLocation соощбщит компоненту, что нужен перерендеринг, если путь поменялся
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <div
        className={
          styles.autorisation
        }
      >
        <div className={styles.modal_content}>

          {isLogin ? 
          <div className={styles.modal_content_title}>
            Введите email и пароль для входа</div>
            :
            <div className={styles.modal_content_title}>
            Регистрация: введите email и пароль</div>  
        }
  
          <div className={styles.modal_content_inputs}>
            <input
              type="text"
              placeholder="Email"
              
              
            />
  
            <input
              type="password"
              placeholder="Пароль"
              
              
            />
          </div>
  
        {isLogin ?
          <button
            type="submit"
            className={styles.modal_submit}>
            Войти
          </button>
          :
          <button
            type="submit"
            className={styles.modal_submit}>
            Регистрация
          </button>
          }
  
          {isLogin ? 
          <div className={styles.modal_content_text}>
            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
          </div>
            :
          <div className={styles.modal_content_text}>
            Уже зарегистрированы? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
          </div>}

        </div>
      </div>
    )
}

export default Autorisation;