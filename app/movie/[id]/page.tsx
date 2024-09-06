import MovieDetails from '../../../components/MovieDetails'; // Ensure this import is present

async function fetchMovieDetails(id: string) {
  const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`);
  const data = await res.json();
  return data;
}

export default async function MovieDetailPage({ params }: { params: { id: string } }) {
  const movie = await fetchMovieDetails(params.id);

  return (
    <div className="container mx-auto p-6">
      <MovieDetails movie={movie} /> {/* Using the MovieDetails component */}
    </div>
  );
}
