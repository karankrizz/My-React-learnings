import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice(
    {
        name:"count-the-number-app",

        initialState:{
            count : 0,
            counts: 1,
        },
        reducers:{
            add:(state,action)=>{
                state.counts +=1
            },
            sub:(state,action)=>{
                state.counts -=1
            }
        }
    }

)
export const {add,sub}=counterSlice.actions
export default counterSlice.reducer