const API_KEY=process.env.REACT_APP_API_KEY;
const requests={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US` ,
    fetchNetf1ixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies :`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies :`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies :`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchHistoryMovies :`/discover/movie?api_key=${API_KEY}&with_genres=36`,
    fetchDocumentaries :`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTvShow:`tv/popular?api_key=${API_KEY}&language=en-US&page=1`
};
export default requests; 