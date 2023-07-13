const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  meals: [],
  seameals: [],
  isLoading: "none",
  SeaLoading: "none",
  ChickLoading: "none",
};

const MealSlice = createSlice({
  name: "mealSlice",
  initialState,
  reducers: {
    mealFetching: (state) => {
      state.isLoading = "loading";
    },
    mealFetched: (state, action) => {
      state.isLoading = "loaded";
      state.meals = action.payload;
    },
    mealFetchingError: (state) => {
      state.isLoading = "loadingError";
    },
    SeamealFetching: (state) => {
      state.SeaLoading = "loading";
    },
    SeamealFetched: (state, action) => {
      state.SeaLoading = "loaded";
      state.seameals = action.payload;
    },
    SeamealFetchingError: (state) => {
      state.SeaLoading = "loadingError";
    },
    ChickmealFetching: (state) => {
      state.ChickLoading = "loading";
    },
    ChickmealFetched: (state, action) => {
      state.ChickLoading = "loaded";
      state.seameals = action.payload;
    },
    ChickmealFetchingError: (state) => {
      state.ChickLoading = "loadingError";
    },
  },
});

export const {
  mealFetching,
  mealFetched,
  mealFetchingError,
  SeamealFetching,
  SeamealFetched,
  SeamealFetchingError,
} = MealSlice.actions;

export default MealSlice;
