const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  meals: [],
  seameals: [],
  isLoading: "none",
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
      state.isLoading = "loading";
    },
    SeamealFetched: (state, action) => {
      state.isLoading = "loaded";
      state.meals = action.payload;
    },
    SeamealFetchingError: (state) => {
      state.isLoading = "loadingError";
    },
  },
});

export const { mealFetching, mealFetched, mealFetchingError } =
  MealSlice.actions;

export default MealSlice;
