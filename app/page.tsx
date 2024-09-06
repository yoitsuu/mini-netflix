import MovieList from '../components/MovieList'; // Ensure this import is present

async function fetchMovies() {
  const res = await fetch(`http://www.omdbapi.com/?s=movie&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`);
  const data = await res.json();
  return data.Search;
}

export default async function Home() {
  const movies = await fetchMovies();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Browse Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}