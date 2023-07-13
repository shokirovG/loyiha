const initialState = {
  users: [],
  isLoading: "none",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetching": {
      return {
        ...state,
        isLoading: "loading",
      };
    }
    case "fetched": {
      return {
        ...state,
        isLoading: "loaded",
        users: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
