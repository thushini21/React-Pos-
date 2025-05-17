import { useState } from "react";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });




    const [error, setError] = useState<String | null>(null);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError('');
        if (formData.email.trim().length === 0) {
            setError("Email is required");
        }

        if (formData.password.trim().length < 5) {
            setError("Password should be at least 5 characters");
        }

        if(formData.email.trim() === "thushiniakashi58@gmail.com" && formData.password === "1234") {
            setError(null)
            toast.success("loged in");
            navigate("/dashboard");
        }else {
            setError("Passwords don't match");
        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-50 px-4">
            <form
                className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-5"
                onSubmit={handleSubmit}
            >
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">POS System Login</h2>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Username</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter email"
                    /><p>{error}</p>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter password"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-semibold transition duration-300"
                >
                    Login
                </button>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don’t have an account?{" "}
                    <a href="/signup" className="text-blue-600 hover:underline font-medium">
                        Sign up here
                    </a>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
