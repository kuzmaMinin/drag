import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IUser} from "../../interfaces/interfaces";


export const indexApi = createApi({
    reducerPath: 'index',
    baseQuery: fetchBaseQuery({baseUrl: 'https://trello.backend.tests.nekidaem.ru/api/v1/'}),
    endpoints: builder => ({
        createUser: builder.mutation({
            query: (body: IUser) => ({
                url: 'users/create/',
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body
            })
        }),
        loginUser: builder.mutation({
            query: (body: IUser) => ({
                url: 'users/login/',
                method: 'POST',
                body,
            })
        }),
        getCards: builder.query({
            query: () => ({
                url: 'cards/',
                method: 'GET',
                headers: {
                    Authorization: `jwt ${window.localStorage.getItem('auth-token')}`
                }
            })
        })
    })
})

export const {useGetCardsQuery, useCreateUserMutation, useLoginUserMutation} = indexApi;