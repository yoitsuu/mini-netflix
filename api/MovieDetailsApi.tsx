export async function fetchMovieDetails(id: string) {
    const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`);
    if (!res.ok) {
      throw new Error('Movie not found');
    }
    const data = await res.json();
    return data;
  }