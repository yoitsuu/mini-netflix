export async function fetchMovies() {
    const res = await fetch(`http://www.omdbapi.com/?s=movie&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`);
    if (!res.ok) {
        throw new Error('Movies not found, check search string or apikey');
      }
    const data = await res.json();
    return data.Search;
  }