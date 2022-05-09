import axios from "@/plugins/axios";
import IDs from "@/store/mock/imdb-top250.js";
import mutations from "@/store/mutations";

const { MOVIES } = mutations;
function serializeData(res) {return res.reduce((acc, item) => {
  acc[item.imdbID] = item;
  return acc;
},{});};


const moviesStore = {
namespaced: true,
state: {
  top250IDs: IDs,
  moviesPerPage: 12,
  currentPage: 1,
  movies: {}
},
getters: {
  slicedIDs: ({ top250IDs }) => (from, to) => top250IDs.slice(from, to),
  currentPage: ({ currentPage }) => currentPage,
  moviesPerPage: ({ moviesPerPage }) => moviesPerPage
},
actions: {
  async fetchMovies({getters, commit}) {
    // console.log(slicedIDs(0,1));
    const { currentPage, moviesPerPage, slicedIDs } = getters;
    const from = currentPage * moviesPerPage - moviesPerPage;
    const to = currentPage * moviesPerPage;
    const moviesToFetch = slicedIDs(from, to);
    const requests = moviesToFetch.map(id => axios.get(`/?i=${id}`));

    const response = await Promise.all(requests);
    const movies = serializeData(response);
    commit(MOVIES, movies);

    console.log(movies);
    console.log(requests);
    console.log(response);
    return response.data;
  }
},
mutations: {
  [MOVIES](state, value) {
    state.movies = value;
  }
}
}

export default moviesStore;