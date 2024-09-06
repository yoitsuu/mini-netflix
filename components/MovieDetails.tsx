import { Movie } from "@/interfaces/MovieInterface";
import Image from "next/image";

interface MovieDetailsProps {
  movie: Movie;
}

export default function MovieDetails({ movie }: MovieDetailsProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-6">
      <Image
        src={movie.Poster}
        width={300}
        height={450}
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
