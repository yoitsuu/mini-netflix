import { notFound } from 'next/navigation';
import MovieDetails from '../../../components/MovieDetails';

async function fetchMovieDetails(id: string) {
  const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`);
  if (!res.ok) {
    throw new Error('Movie not found');
  }
  const data = await res.json();
  return data;
}

export default async function MovieDetailQueryPage({ searchParams }: { searchParams: { movieId?: string } }) {
  // Check if the query param movieId exists
  const movieId = searchParams.movieId;

  // If no movieId query param is provided, redirect to a not found page
  if (!movieId) {
    return notFound();
  }

  // Fetch the movie details
  const movie = await fetchMovieDetails(movieId);

  if (!movie || movie.Error) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-6">
      <MovieDetails movie={movie} />
    </div>
  );
}
