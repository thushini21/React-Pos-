import {Link, useLocation, useNavigate} from "react-router-dom";
import Logo from "../assets/react.svg";

const Navbar = () => {
    const routes = [
        {to: "/",name: "Home"},
        {to: "/about",name: "About"},
        {to: "/contact",name: "Contact"}
    ]

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.pathname);

    const isActive = (to: string) => {
        return to === location.pathname;
    }

    const onLoginPressed = () => {
        navigate("/login");
    }

    return (
        <>
            <nav className="bg-blue-200 shadow-lg sticky top-0 z-50 px-8 py-4 flex items-center justify-between border-b border-pink-200 rounded-b-3xl">
                {/* Brand Logo */}
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full" />
                    <span className="text-2xl font-extrabold text-white tracking-tight">
                    <span className="text-blue-500">POS</span>
                    </span>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-6 text-lg font-medium text-white">
                    {routes.map((routes, index) => (
                        <Link
                            className={`relative  transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:text-blue-500 after:transition-all after:duration-300
                            ${isActive(routes.to)? 'text-blue-500' : ''}`}
                        key={index}
                            to={routes.to}
                        >
                            {routes.name}
                        </Link>

                    ))

                    }
                  {/*  <Link
                        to="/about"
                        className="relative hover:text-black transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-pink-400 after:transition-all after:duration-300"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="relative hover:text-black transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-pink-400 after:transition-all after:duration-300"
                    >
                        Contact
                    </Link>*/}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={onLoginPressed}
                        className="bg-white text-blue-500 hover:bg-grey-500 hover:text-black font-semibold px-4 py-2 rounded-xl shadow-md transition duration-300"
                    >
                        Login
                    </button>
                    <button
                        className="bg-blue-500 text-white hover:bg-white hover:text-black font-semibold px-4 py-2 rounded-xl shadow-md transition duration-300"
                    >
                        Dashboard
                    </button>
                </div>
            </nav>

        </>
    )
}

export default Navbar;