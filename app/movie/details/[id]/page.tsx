import { notFound } from 'next/navigation';
import MovieDetails from '../../../../components/MovieDetails';

async function fetchMovieDetails(id: string) {
  const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`);
  if (!res.ok) {
    throw new Error('Movie not found');
  }
  const data = await res.json();
  return data;
}

export default async function MovieDetailPage({ params }: { params: { id: string } }) {
  // Get the movie ID from the dynamic route (params.id)
  const movieId = params.id;

  if (!movieId) {
    return notFound();
  }

  // Fetch movie details using the movie ID
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
