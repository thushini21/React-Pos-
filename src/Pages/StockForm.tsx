import { useState } from "react";
import type { Stock } from "../types/Stock";

const units = ['kg', 'ml', 'g', 'L', 'pcs'];

type Props = {
    onSubmit: (stock: Stock) => void;
    onCancel: () => void;
    initialData?: Stock;
};

const StockForm = ({ onSubmit, onCancel, initialData }: Props) => {
    const [formData, setFormData] = useState({
        id: initialData?.id || Date.now(),
        name: initialData?.name || '',
        unitPrice: initialData?.unitPrice.toString() || '',
        quantity: initialData?.quantity.toString() || '',
        unit: initialData?.unit || 'kg',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const stock: Stock = {
            id: formData.id,
            name: formData.name,
            unitPrice: parseFloat(formData.unitPrice),
            quantity: parseFloat(formData.quantity),
            unit: formData.unit as Stock["unit"],
        };
        onSubmit(stock);
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 p-4 bg-white rounded-xl shadow-md">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Stock Name" className="border p-3 rounded-xl" required />
            <input type="number" name="unitPrice" value={formData.unitPrice} onChange={handleChange} placeholder="Unit Price" className="border p-3 rounded-xl" required />
            <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Available Quantity" className="border p-3 rounded-xl" required />
            <select name="unit" value={formData.unit} onChange={handleChange} className="border p-3 rounded-xl">
                {units.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
            <div className="flex gap-2">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
                <button type="button" onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
            </div>
        </form>
    );
};

export default StockForm;
