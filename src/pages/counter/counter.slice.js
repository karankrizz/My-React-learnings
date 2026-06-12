import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "todo-app",

    initialState: {
        items: []
    },

    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },

        removeItem: (state, action) => {
            state.items.splice(action.payload, 1);
        }
    }
});

export const { addItem, removeItem } = counterSlice.actions;

export default counterSlice.reducer;