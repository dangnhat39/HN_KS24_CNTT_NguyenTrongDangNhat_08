import React from "react";
import { Movie } from "../App";
import MovieCard from "./MovieCard";

interface Props {
    movies: Movie[];
    onDelete: (id: number) => void;
    onEdit: (id: number, newTitle: string) => void;
}

const MovieList: React.FC<Props> = ({ movies, onDelete, onEdit }) => {
    if (movies.length === 0) {
        return <p className="bg-blue-500 text-center text-4xl">🎪 Chưa có phim nào. Hãy thêm phim đầu tiên để bắt đầu quản lý!</p>;
    }

    return (
        <div className="w-full max-w-2xl mx-auto mt-6 bg-amber-200">
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-white mb-4">
                🎥 Danh sách phim
            </h2>
            {movies.map((m) => (
                <MovieCard key={m.id} movie={m} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </div>
    );
};

export default MovieList;