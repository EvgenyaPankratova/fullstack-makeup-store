import { authRoutes, publicRoutes } from "../../routes";
import { SHOP_ROUTE } from "../../utils/consts";
import styles from "./AppRouter.module.css";
import {Routes, Route, Navigate} from 'react-router-dom';

const AppRouter = () => {
    const isAuth = false;
    return (
      
        <Routes>
            {/* отрисовываем только если пользователь авторизован */}

            {isAuth && authRoutes.map(({path, Component}) => {
                return  <Route key={path} path={path} element={<Component/>}/>
            }
            )}

            {/* отрисовываем публичные роуты для всех */}

            {publicRoutes.map(({path, Component}) => {
                return <Route key={path} path={path} element={<Component/>}/>
            }  
            )}

            {/* перенаправим на главную страницу, если написать что-то другое в адресе */}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} />}/>

        </Routes>

    )
}

export default AppRouter;