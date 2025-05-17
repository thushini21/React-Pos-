import React from "react";

interface DialogProps {
    title: string;
    content: string;
    isOpen: boolean;
    onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ title, content, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
                <p className="text-gray-600">{content}</p>
                <div className="mt-6 text-right">
                    <button
                        onClick={onClose}
                        className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-500 transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialog;
