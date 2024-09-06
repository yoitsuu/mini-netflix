interface Movie {
  Title: string;
  Poster: string;
  imdbRating: string;
  Plot: string;
}

interface MovieDetailsProps {
  movie: Movie;
}

export default function MovieDetails({ movie }: MovieDetailsProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-6">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-64 h-auto rounded-lg shadow-lg"
      />
      <h1 className="text-3xl font-bold">{movie.Title}</h1>
      <p className="text-gray-600 text-lg">
        <strong className="text-gray-800">Rating:</strong> {movie.imdbRating}
      </p>
      <p className="text-gray-700 leading-relaxed max-w-lg">{movie.Plot}</p>
    </div>
  );
}
