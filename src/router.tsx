import {createBrowserRouter} from "react-router-dom";
import Layout from "./Pages/Layout.tsx";
import HomePage from "./Pages/HomePage.tsx";
import AboutPage from "./Pages/AboutPage.tsx";
import ContactPage from "./Pages/ContactPage.tsx";
import ErrorPage from "./Pages/ErrorPage.tsx";
import LoginPage from "./Pages/LoginPage.tsx";
import DashboardPage from "./Pages/DashboardPage.tsx";
import CustomerPage from "./Pages/CustomerPage.tsx";
import StocksPage from "./Pages/StocksPage.tsx";
import OrdersPage from "./Pages/OrdersPage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Layout/>,
        errorElement:<ErrorPage/>,
        children: [
            {index: true,element: <HomePage/>},
            {path: "/about",element: <AboutPage/>},
            {path: "/contact",element: <ContactPage/>},
            {path: "/login",element: <LoginPage/>},
            {path: "/dashboard",element: <DashboardPage/>},
            {path: "/dashboard/customer",element: <CustomerPage/>},
            {path: "/dashboard/stock",element: <StocksPage/>},
            {path: "/dashboard/order",element: <OrdersPage/>}
        ]
    }
])

export default router;