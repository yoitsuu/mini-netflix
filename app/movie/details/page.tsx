import { notFound } from 'next/navigation';
import MovieDetails from '../../../components/MovieDetails';
import { fetchMovieDetails } from '../../../api/MovieDetailsApi';

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
