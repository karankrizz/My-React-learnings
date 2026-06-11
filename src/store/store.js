import { configureStore } from "@reduxjs/toolkit";
import countAdd from '../pages/counter/counter.slice'


export const store =configureStore(
    {
        reducer:{
            counter: countAdd
        }
    }
)