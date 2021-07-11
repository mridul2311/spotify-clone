export const initialState = {
  user: null,
  playlists: [],
  // spotify: null,
  discover_weekly: null,
  // top_artists: null,
  playing: false,
  item: null,
  //token:
  //"BQCLpcHtu24Ckg6XscXHAnp3j0fp07oRAQeABioz8qI-XB5ZjvK4kT5fua1LhGjV4_PeewziWOBNc30YoxuwPXu42nRdFMqnAdL19rhUmhh1VfinDj71lkXZ7u_m-QAwqgDvAPVK43ktvHgWUV_jNLyZyy-KHxXGLjjL2xL5VA6lHzJefi8y_qKF",
};

const reducer = (state, action) => {
  console.log(action);
  //Action -> type,[payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
