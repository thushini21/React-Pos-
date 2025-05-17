import {useNavigate} from "react-router-dom";

const DashboardPage = () => {
    const navigate = useNavigate();

    const dashboardButtons = [
        {name: "Customers", to: "/dashboard/customer"},
        {name: "Stocks", to: "/dashboard/stock"},
        {name: "Orders", to: "/dashboard/order"},
    ]

    const onBtnClicked = (to:string) => {
        navigate(to)
    }


    return (
        <>
            <div className="min-h-screen bg-blue-50 p-8">
                <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">Dashboard</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dashboardButtons.map((button, index) => (
                        <button
                           onClick={() => onBtnClicked(button.to)}
                            className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-blue-200 transition duration-300 border border-blue-100 hover:border-blue-400"
                        key={index}
                        >
                            <h2 className="text-2xl font-semibold text-blue-700 mb-2">{button.name}</h2>
                            <p className="text-gray-600">Manage customer records</p>
                        </button>
                    ))}
                    {/* Customer Card */}
                   {/* <Link
                        to="/customers"
                        className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-blue-200 transition duration-300 border border-blue-100 hover:border-blue-400"
                    >
                        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Customers</h2>
                        <p className="text-gray-600">Manage customer records</p>
                    </Link>*/}

                    {/* Stock Card */}
                  {/*  <Link
                        to="/stock"
                        className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-blue-200 transition duration-300 border border-blue-100 hover:border-blue-400"
                    >
                        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Stock</h2>
                        <p className="text-gray-600">View and manage inventory</p>
                    </Link>*/}

                    {/* Order Card */}
                   {/* <Link
                        to="/orders"
                        className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-blue-200 transition duration-300 border border-blue-100 hover:border-blue-400"
                    >
                        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Orders</h2>
                        <p className="text-gray-600">Place and view orders</p>
                    </Link>*/}
                </div>
            </div></>
    )
}

export default DashboardPage;