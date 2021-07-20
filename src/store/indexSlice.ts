import {createSlice} from "@reduxjs/toolkit";
import {IInitialState} from "../../interfaces/interfaces";
import {RootState} from "./store";

const initialState: IInitialState = {
    currentIndex: '0',
    token: null
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
    },
});

export const {setIndex, setToken} = indexReducer.actions;

export default indexReducer.reducer;

export const selectIndex = (state: RootState) => state.cards.currentIndex;
export const selectToken = (state: RootState) => state.cards.currentIndex;
