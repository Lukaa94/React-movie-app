/*const baseApi = "https://api.themoviedb.org/3/movie/popular?api_key=10bb1e7ae1e1803b4248edae4cc9a06c";*/

const ApiKey = "10bb1e7ae1e1803b4248edae4cc9a06c";

const urlList = {
    popular: `/movie/popular?api_key=${ApiKey}`,
    topRated: `/movie/top_rated?api_key=${ApiKey}`,
    year2020: `discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&year=2020`
}

export default urlList;