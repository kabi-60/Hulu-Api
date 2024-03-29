const API_KEY = "db34887f20be73383ac2cb0aeab7f4a8";
 
export default {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMysteryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFi:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestern:`/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimation:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTv:`/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};