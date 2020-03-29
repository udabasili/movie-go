const movieApiKey = process.env.REACT_APP_MOVIE_API
export const movieApiLink = (queryParams = 0) => {
  const apiKEY = movieApiKey;
  const baseUrl = 'https://api.themoviedb.org/3';
  const relativeUrl = '/movie/top_rated';
  let fullUrl = `${baseUrl}${relativeUrl}?api_key=${apiKEY}&language=en-US`;

  if (queryParams !== 0) {
    const params = queryParams[Object.keys(queryParams)];
    fullUrl = `${fullUrl}&page=${params}`;
  }
  return fullUrl;
};

export const getTopMovies = ({ page }) => movieApiLink({ page });

export async function getData(link) {
  const response = await fetch(link);
  const data = await response.json();
  return data;
}

export async function filterMovies(movies, id) {
  const database = await movies.filter((d) => d.genre_ids.some((genre_id) => genre_id === id));
  return database;
}
