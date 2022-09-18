import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./features/favouriteSlice";

export const store = configureStore({
    reducer: {
        favouriteMeals: favouriteReducer
    }
})