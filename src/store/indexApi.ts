import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ICard, IUser} from "../../interfaces/interfaces";

type TCardsResponse = ICard[]

export const indexApi = createApi({
    reducerPath: 'index',
    baseQuery: fetchBaseQuery({baseUrl: 'https://trello.backend.tests.nekidaem.ru/api/v1/'}),
    tagTypes: ['ICard', 'IUser'],
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
        getCards: builder.query<TCardsResponse, void>({
            query: () => ({
                url: 'cards/',
                method: 'GET',
                headers: {
                    Authorization: `jwt ${window.localStorage.getItem('auth-token')}`
                }
            }),
            providesTags: ['ICard']
        }),
        createCard: builder.mutation({
            query: (body: ICard) => ({
                url: 'cards/',
                method: 'POST',
                headers: {
                    Authorization: `jwt ${window.localStorage.getItem('auth-token')}`
                },
                body,
            }),
            invalidatesTags: ['ICard'],
        }),
        deleteCard: builder.mutation({
            query: (id: number) => ({
                url: `cards/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `jwt ${window.localStorage.getItem('auth-token')}`
                }
            }),
            invalidatesTags: ['ICard'],
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
            }),
            invalidatesTags: ['ICard'],
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