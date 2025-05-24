import { useEffect, useState } from "react";
import type { Customer } from "../types/Customer.ts";

type Props = {
    onSubmit: (customer: Customer) => void;
    onCancel: () => void;
    initialData?: Customer;
};

const CustomerForm = ({ onSubmit, onCancel, initialData }: Props) => {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        address: "",
        dob: "",
    });

    const [error, setError] = useState<string | null>(null);

    // Load initial data when editing
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
        setError(null); // Clear error on typing
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Basic validation
        if (!formData.id.trim()) {
            setError("ID is required");
            return;
        }
        if (!formData.name.trim()) {
            setError("Name is required");
            return;
        }
        if (!formData.address.trim()) {
            setError("Address is required");
            return;
        }
        if (!formData.dob.trim()) {
            setError("Date of Birth is required");
            return;
        }

        const customer: Customer = {
            id: Number(formData.id),
            name: formData.name,
            address: formData.address,
            dateOfBirth: formData.dob,
        };

        onSubmit(customer); // Call the parent's handler
    };

    return (
        <>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
                {initialData ? "Edit Customer" : "Add Customer"}
            </h2>
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
                    disabled={!!initialData} // ID is not editable during update
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

                {error && (
                    <p className="text-red-500 md:col-span-2 font-medium">{error}</p>
                )}

                <div className="md:col-span-2 flex justify-between gap-4">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded-xl font-semibold hover:bg-blue-500 w-full"
                    >
                        {initialData ? "Update Customer" : "Add Customer"}
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="bg-gray-300 text-gray-800 py-2 px-4 rounded-xl font-semibold hover:bg-gray-400 w-full"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </>
    );
};

export default CustomerForm;
