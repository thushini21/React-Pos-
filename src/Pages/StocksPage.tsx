import { useReducer, useState } from "react";
import type { Stock } from "../types/Stock";
import { stockData } from "../data/StockData";
import StockForm from "../Pages/StockForm.tsx";

const stockReducer = (state: Stock[], action: { type: string; payload: any }): Stock[] => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "UPDATE":
            return state.map(stock => stock.id === action.payload.id ? action.payload : stock);
        case "DELETE":
            return state.filter(stock => stock.id !== action.payload);
        default:
            return state;
    }
};

const StockPage = () => {
    const [stocks, dispatch] = useReducer(stockReducer, stockData);
    const [editingStock, setEditingStock] = useState<Stock | null>(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleSubmit = (stock: Stock) => {
        if (editingStock) {
            dispatch({ type: "UPDATE", payload: stock });
        } else {
            dispatch({ type: "ADD", payload: stock });
        }
        setIsFormOpen(false);
        setEditingStock(null);
    };

    const handleEdit = (stock: Stock) => {
        setEditingStock(stock);
        setIsFormOpen(true);
    };

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this stock?")) {
            dispatch({ type: "DELETE", payload: id });
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Stock Management</h2>
            <button onClick={() => { setIsFormOpen(true); setEditingStock(null); }} className="mb-4 bg-blue-600 text-white px-4 py-2 rounded">Add Stock</button>

            {isFormOpen && (
                <StockForm onSubmit={handleSubmit} onCancel={() => { setIsFormOpen(false); setEditingStock(null); }} initialData={editingStock || undefined} />
            )}

            <table className="min-w-full bg-white shadow rounded-xl mt-6">
                <thead className="bg-blue-200">
                <tr>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Unit Price</th>
                    <th className="px-4 py-2 text-left">Quantity</th>
                    <th className="px-4 py-2 text-left">Unit</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                </tr>
                </thead>
                <tbody>
                {stocks.map(stock => (
                    <tr key={stock.id} className="border-t">
                        <td className="px-4 py-2">{stock.name}</td>
                        <td className="px-4 py-2">{stock.unitPrice}</td>
                        <td className="px-4 py-2">{stock.quantity}</td>
                        <td className="px-4 py-2">{stock.unit}</td>
                        <td className="px-4 py-2 space-x-2">
                            <button onClick={() => handleEdit(stock)} className="bg-yellow-400 px-3 py-1 rounded text-white">Edit</button>
                            <button onClick={() => handleDelete(stock.id)} className="bg-red-500 px-3 py-1 rounded text-white">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockPage;
