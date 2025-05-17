import {Link} from "react-router-dom";

const ErrorPage= () => {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 text-center px-4">
                <h1 className="text-[8rem] font-extrabold text-blue-500 drop-shadow-lg">404</h1>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">Oops! Page not found</h2>
                <p className="text-lg text-gray-600 mb-8">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="bg-blue-600 hover:bg-blue-400 text-white hover:text-black px-6 py-3 rounded-xl text-lg font-semibold shadow-lg transition duration-300"
                >
                    Go Back Home
                </Link>

                <img
                    src="https://cdn.pixabay.com/photo/2020/04/13/10/01/cake-5036840_1280.png"
                    alt="Cake Illustration"
                    className="w-64 mt-10 drop-shadow-xl"
                />
            </div>
        </>
    )
}

export default ErrorPage;