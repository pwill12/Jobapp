export default (state, action) => {
    switch (action.type) {
      case "ADD_JOBS_TO_FAVORITE":
        return {
          ...state,
          favorite: [action.payload, ...state.favorite],
        };
      case "REMOVE_JOBS_FROM_FAVORITE":
        return {
          ...state,
          favorite: state.favorite.filter(
            (props) => props._id !== action.payload
          ),
        };
      default:
        return state;
    }
  };