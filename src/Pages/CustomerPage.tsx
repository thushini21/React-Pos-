import { useState } from "react";
import { customerData } from "../data/CustomerData.ts";
import type { Customer } from "../types/Customer.ts";
import CustomerForm from "./CustomerForm.tsx";

function Dialog({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg relative w-full max-w-xl">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
                    aria-label="Close dialog"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}

export const CustomerPage = () => {
    const [customers, setCustomers] = useState<Customer[]>(customerData);
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
    const [editingInfo, setEditingInfo] = useState<Customer | null>(null); // New state

    const handleSubmit = (customer: Customer) => {
        if (editingCustomer) {
            setCustomers(prev =>
                prev.map(c => (c.id === editingCustomer.id ? customer : c))
            );
        } else {
            setCustomers(prev => [...prev, customer]);
        }
        setIsDialogOpen(false);
        setEditingCustomer(null);
        setEditingInfo(null);
    };

    const handleEdit = (customer: Customer) => {
        console.log("Editing customer:", JSON.stringify(customer, null, 2));
        setEditingCustomer(customer);
        setEditingInfo(customer);
        setIsDialogOpen(true);
    };

    const handleDelete = (id: number) => {
        console.log("Deleting customer with ID:", id);
        const confirmDelete = window.confirm("Are you sure you want to delete this customer?");
        if (confirmDelete) {
            setCustomers(prev => prev.filter(c => c.id !== id));
        }
    };

    const handleCancel = () => {
        setIsDialogOpen(false);
        setEditingCustomer(null);
        setEditingInfo(null); // Reset displayed info
    };

    return (
        <>
            <div className="overflow-x-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-blue-700 mb-6">Customer Details</h2>

                <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
                    <thead className="bg-blue-200 text-blue-900">
                    <tr>
                        <th className="text-left px-6 py-3 text-sm font-semibold uppercase">Customer ID</th>
                        <th className="text-left px-6 py-3 text-sm font-semibold uppercase">Name</th>
                        <th className="text-left px-6 py-3 text-sm font-semibold uppercase">Address</th>
                        <th className="text-left px-6 py-3 text-sm font-semibold uppercase">Date of Birth</th>
                        <th className="text-left px-6 py-3 text-sm font-semibold uppercase">Edit</th>
                        <th className="text-left px-6 py-3 text-sm font-semibold uppercase">Delete</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-blue-100">
                    {customers.map((customer) => (
                        <tr key={customer.id} className="hover:bg-blue-50 transition duration-300">
                            <td className="px-6 py-4">{customer.id}</td>
                            <td className="px-6 py-4">{customer.name}</td>
                            <td className="px-6 py-4">{customer.address}</td>
                            <td className="px-6 py-4">{customer.dateOfBirth}</td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={() => handleEdit(customer)}
                                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm">
                                    Edit
                                </button>
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={() => handleDelete(customer.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <div className="mt-6">
                    <button
                        onClick={() => {
                            setEditingCustomer(null);
                            setEditingInfo(null);
                            setIsDialogOpen(true);
                        }}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Add Customer
                    </button>
                </div>

                {editingInfo && (
                    <div className="mt-8 p-4 border rounded bg-gray-50 shadow-md max-w-xl">
                        <h3 className="text-lg font-semibold mb-2 text-blue-800">Currently Editing</h3>
                        <p><strong>ID:</strong> {editingInfo.id}</p>
                        <p><strong>Name:</strong> {editingInfo.name}</p>
                        <p><strong>Address:</strong> {editingInfo.address}</p>
                        <p><strong>Date of Birth:</strong> {editingInfo.dateOfBirth}</p>
                    </div>
                )}
            </div>

            {isDialogOpen && (
                <Dialog onClose={handleCancel}>
                    <CustomerForm
                        onSubmit={handleSubmit}
                        onCancel={handleCancel}
                        initialData={editingCustomer || undefined}
                    />
                </Dialog>
            )}
        </>
    );
};

export default CustomerPage;
