import React, { useState } from "react";

interface Props {
    onAdd: (title: string) => void;
}

const MovieForm: React.FC<Props> = ({ onAdd }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;
        onAdd(title);
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center bg-white p-3 rounded-xl shadow-md w-full max-w-2xl mx-auto mt-6" >
            <input type="text" placeholder="Nhập tên phim..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" disabled={!title.trim()}
                className={`ml-3 px-4 py-2 rounded-lg font-semibold text-white transition 
               ${title.trim()
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-400 cursor-not-allowed"}`}
            >
                ➕ Thêm phim
            </button>
        </form>
    );
};

export default MovieForm;