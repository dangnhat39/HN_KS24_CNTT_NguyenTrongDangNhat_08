import React, { useState } from "react";
import MovieForm from "./componets/MovieForm";
import MovieList from "./componets/MovieList";

export interface Movie {
  id: number;
  title: string;
  createdAt: string;
}

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = (title: string) => {
    const newMovie: Movie = {
      id: Date.now(),
      title,
      createdAt: new Date().toLocaleString(),
    };
    setMovies([...movies, newMovie]);
  };

  const deleteMovie = (id: number) => {
    setMovies(movies.filter((m) => m.id !== id));
  };

  const editMovie = (id: number, newTitle: string) => {
    setMovies(movies.map((m) => (m.id === id ? { ...m, title: newTitle } : m)));
  };

  return (
    <div className="container">
      <div>
        <h1 className="text-7xl text-center text-white bg-blue-500 ">🎬 Quản lý phim chiếu</h1>
        <h2 className="text-center bg-blue-500  text-white">Thêm ,sửa và quản lý các bộ phim chuẩn bị được chiếu</h2>
      </div>
      <MovieForm onAdd={addMovie} />
      <MovieList movies={movies} onDelete={deleteMovie} onEdit={editMovie} />
    </div>
  );
};

export default App;