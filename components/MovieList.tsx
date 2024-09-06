import Link from 'next/link';

interface Movie {
  imdbID: string;
  Poster: string;
  Title: string;
}

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
      {movies.map((movie) => (
        <Link key={movie.imdbID} href={`/movie/details/${movie.imdbID}`}>
        <div className="cursor-pointer group transform hover:scale-105 transition-transform duration-300">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-auto rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300"
          />
          <h2 className="text-center mt-4 text-lg font-semibold text-gray-800 group-hover:text-gray-900">
            {movie.Title}
          </h2>
        </div>
      </Link>
      
      ))}
    </div>
  );
}
