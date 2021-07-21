import {createSlice} from "@reduxjs/toolkit";
import {IInitialState} from "../../interfaces/interfaces";
import {RootState} from "./store";

const initialState: IInitialState = {
    currentIndex: '0',
    token: null,
    isAuth: false
}

const indexReducer = createSlice({
    name: 'index',
    initialState,
    reducers: {
       setIndex: (state, action) => {
           state.currentIndex = action.payload
       },
        setToken: (state, action) => {
            state.token = action.payload
        },
        setAuth: (state, action) => {
            state.isAuth = action.payload
        },
    },
});

export const {setIndex, setToken, setAuth} = indexReducer.actions;

export default indexReducer.reducer;

export const selectIndex = (state: RootState) => state.cards.currentIndex;
export const selectToken = (state: RootState) => state.cards.currentIndex;
export const selectIsAuth = (state: RootState) => state.cards.isAuth;
