import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://61e6cc5ace3a2d0017359430.mockapi.io/api/v1',
    }),
    tagTypes: ['Contact'],

    endpoints: builder => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contact'],
        }),

        addContact: builder.mutation({
        query: contactContent => ({
            url: `/contacts`,
            method: 'POST',
            body: contactContent,
                
            }),
            invalidatesTags: ['Contact'],
        }),
        
        deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    }),
});

export const { useFetchContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;