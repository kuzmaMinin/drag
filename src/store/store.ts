import {configureStore} from "@reduxjs/toolkit";
import indexReducer from "./indexSlice";
import {indexApi} from "./indexApi";

const store = configureStore({
    reducer: {
        cards: indexReducer,
        [indexApi.reducerPath]: indexApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(indexApi.middleware),
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;