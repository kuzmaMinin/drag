import {createSlice} from "@reduxjs/toolkit";
import {IState, IUser} from "../../interfaces/interfaces";
import {indexApi} from "./indexApi";
import {RootState} from "./store";

const initialState: IState = {
    cards: [
        {id: 0, row: '0', seq_num: 0, text: 'lorem ipsum dolores'},
        {id: 1, row: '0', seq_num: 1, text: 'lorem ipsum dolores'},
        {id: 2, row: '0', seq_num: 2, text: 'lorem ipsum dolores'},
        {id: 3, row: '0', seq_num: 3, text: 'lorem ipsum dolores'},

        {id: 4, row: '1', seq_num: 0, text: 'lorem ipsum dolores'},
        {id: 5, row: '1', seq_num: 1, text: 'lorem ipsum dolores'},

        {id: 6, row: '2', seq_num: 0, text: 'lorem ipsum dolores'},
        {id: 7, row: '2', seq_num: 1, text: 'lorem ipsum dolores'},

        {id: 8, row: '3', seq_num: 0, text: 'lorem ipsum dolores'},
    ],
    isLogged: false
}

const indexReducer = createSlice({
    name: 'index',
    initialState,
    reducers: {
        addPost: (state, action) => {
            console.log(action)
            state.cards.push(action.payload);
        }
    },
    // extraReducers: builder => {
    //     builder
    //         .addMatcher(indexApi.endpoints.getCards.matchPending, (state, action) => {
    //             console.log('pending');
    //         })
    //         .addMatcher(indexApi.endpoints.getCards.matchFulfilled, (state, action) => {
    //             console.log('fulfilled', action);
    //
    //         })
    //         .addMatcher(indexApi.endpoints.getCards.matchRejected, (state, action) => {
    //             console.log('rejected');
    //         })
    // }
});

export const {addPost} = indexReducer.actions;

export default indexReducer.reducer;

export const selectAllCards = (state: RootState) => state.cards.cards;
