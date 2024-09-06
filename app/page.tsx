import MovieList from '../components/MovieList'; // Ensure this import is present
import { fetchMovies } from '@/api/MovieListApi';


export default async function Home() {
  const movies = await fetchMovies();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Browse Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}