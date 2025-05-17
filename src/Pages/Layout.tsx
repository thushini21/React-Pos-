import Navbar from "../Components/Navbar.tsx";
import {Outlet} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Footer from "../Components/Footer.tsx";

const Layout = () => {
    return (
        <>
        <Navbar/>
            <div className="p-5">
                <Outlet/>
            </div>
            <Footer/>
            <Toaster/>
        </>
    )
}

export default Layout;