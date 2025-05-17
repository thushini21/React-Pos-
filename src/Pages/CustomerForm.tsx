import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import type { Customer } from "../types/Customer.ts";

interface CustomerFormProps {
    onSubmit: (customer: Customer) => void;
    onCancel?: () => void;
    initialData?: Customer;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ onSubmit, onCancel, initialData }) => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        address: '',
        dob: '',
    });

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (initialData) {
            setFormData({
                id: initialData.id.toString(),
                name: initialData.name,
                address: initialData.address,
                dob: initialData.dateOfBirth,
            });
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.id || !formData.name || !formData.address || !formData.dob) {
            setError("All fields are required");
            return;
        }

        const newCustomer: Customer = {
            id: Number(formData.id),
            name: formData.name,
            address: formData.address,
            dateOfBirth: formData.dob,
        };

        onSubmit(newCustomer);

        if (initialData) {
            toast.success("Customer Updated Successfully!");
        } else {
            toast.success("Customer Added Successfully!");
        }

        setFormData({ id: '', name: '', address: '', dob: '' });
        setError(null);
    };

    return (
        <>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
                {initialData ? "Edit Customer" : "Add Customer"}
            </h2>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-2xl shadow-md mb-6"
            >
                <input
                    type="text"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    placeholder="Customer ID"
                    className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                    disabled={!!initialData} // ID should not be editable during edit
                />
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Customer Name"
                    className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className="md:col-span-2 flex flex-col gap-3 md:flex-row">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-500 transition duration-300"
                    >
                        {initialData ? "Update Customer" : "Add Customer"}
                    </button>
                    {onCancel && (
                        <button
                            type="button"
                            onClick={onCancel}
                            className="w-full bg-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-400 transition duration-300"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </>
    );
};

export default CustomerForm;
