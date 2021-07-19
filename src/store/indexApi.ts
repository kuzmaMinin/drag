import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ICard, IUser} from "../../interfaces/interfaces";


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
        getCards: builder.query<any, any>({
            query: () => ({
                url: 'cards/',
                method: 'GET',
                headers: {
                    Authorization: `jwt ${window.localStorage.getItem('auth-token')}`
                }
            })
        }),
        createCard: builder.mutation({
            query: (body: ICard) => ({
                url: 'cards/',
                method: 'POST',
                headers: {
                    Authorization: `jwt ${window.localStorage.getItem('auth-token')}`
                },
                body,
            })
        }),
        deleteCard: builder.mutation({
            query: (id: number) => ({
                url: `cards/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `jwt ${window.localStorage.getItem('auth-token')}`
                }
            })
        }),
        updateCard: builder.mutation({
            // @ts-ignore
            query: (id: number, data) => ({
                url: `cards/${id}`,
                method: 'PATCH',
                headers: {
                    Authorization: `jwt ${window.localStorage.getItem('auth-token')}`
                },
                data
            })
        })
    })
})

export const {
    useGetCardsQuery,
    useCreateUserMutation,
    useLoginUserMutation,
    useCreateCardMutation,
    useDeleteCardMutation,
    useUpdateCardMutation
} = indexApi;