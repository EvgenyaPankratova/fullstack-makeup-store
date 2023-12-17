import AdminPanel from './pages/AdminPanel/AdminPanel';
import Basket from './pages/Basket/Basket';
import Shop from './pages/Shop/Shop';
import Authorisation from './pages/Authorisation/Authorisation';
import ProductPage from './pages/ProductPage/ProductPage';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from './utils/consts';

export const authRoutes = [
    {
    path: ADMIN_ROUTE,
    Component: AdminPanel
},
{
    path: BASKET_ROUTE,
    Component: Basket
},
];



export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Authorisation
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Authorisation
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },

];