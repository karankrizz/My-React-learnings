import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../pages/counter/counter.slice";

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
});