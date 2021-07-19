import {configureStore} from "@reduxjs/toolkit";
import indexReducer from "./indexSlice";
import {indexApi} from "./indexApi";

const store = configureStore({
    reducer: {
        cards: indexReducer,
        [indexApi.reducerPath]: indexApi.reducer,
    }
})

export default store;