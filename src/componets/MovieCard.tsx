import React, { useState } from "react";
import { Movie } from "../App";

interface Props {
    movie: Movie;
    onDelete: (id: number) => void;
    onEdit: (id: number, newTitle: string) => void;
}

const MovieCard: React.FC<Props> = ({ movie, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(movie.title);

    const handleEdit = () => {
        if (isEditing && newTitle.trim()) {
            onEdit(movie.id, newTitle);
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className="bg-white text-gray-800 p-4 rounded-xl shadow-md mb-4">
            {isEditing ? (
                <input type="text"  value={newTitle} onChange={(e) => setNewTitle(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            ) : (
                <h3 className="text-lg font-bold mb-1">{movie.title}</h3>
            )}
            <p className="text-sm text-gray-500 mb-3">⏰ {movie.createdAt}</p>
            <button
                onClick={handleEdit}
                className="px-4 py-2 mr-2 rounded-lg text-white font-medium transition
               bg-yellow-500 hover:bg-yellow-600"
            >
                {isEditing ? "💾 Lưu" : "✏️ Sửa"}
            </button>
            <button
                onClick={() => onDelete(movie.id)}
                className="px-4 py-2 rounded-lg text-white font-medium transition
               bg-red-500 hover:bg-red-600"
            >
                🗑 Xoá
            </button>
        </div>

    );
};

export default MovieCard;