import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_API_URL;

const token = localStorage.getItem('userToken');

export const advApi = createApi({
  reducerPath: 'advApi',
  baseQuery: fetchBaseQuery({
    baseUrl,

    prepareHeaders: (headers, { getState }) => {
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      headers.set(
        'Accept',
        'application/json, application/xml, text/plain, text/html, *.*'
      );

      return headers;
    },
  }),

  tagTypes: ['Adv', 'Comment'],

  endpoints: (builder) => ({
    getAdvs: builder.query({
      query: (parameters) => ({
        url: '/ads',
        params: { user_id: parameters?.userId, sorting: parameters?.sorting },
      }),
      providesTags: ['Adv'],
    }),

    getAdvById: builder.query({
      query: (advId) => `/ads/${advId}`,
      providesTags: ['Adv'],
    }),

    addAdv: builder.mutation({
      query: ({ title, description, price, files }) => ({
        url: `/ads?${new URLSearchParams({
          title,
          description,
          price,
        })}`,
        method: 'POST',
        body: files,
      }),
      invalidatesTags: ['Adv'],
    }),

    deleteAdv: builder.mutation({
      query: (advId) => ({
        url: `/ads/${advId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Adv'],
    }),

    updateAdv: builder.mutation({
      query: ({ advId, title, description, price }) => ({
        url: `/ads/${advId}`,
        method: 'PATCH',
        body: { title, description, price },
      }),
      invalidatesTags: ['Adv'],
    }),

    addAdvPicture: builder.mutation({
      query: ({ advId, file }) => ({
        url: `/ads/${advId}/image`,
        method: 'POST',

        body: file,
      }),
      invalidatesTags: ['Adv'],
    }),

    deleteAdvPicture: builder.mutation({
      query: ({ advId, file }) => ({
        url: `/ads/${advId}/?${new URLSearchParams({
          file_url: file,
        })}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Adv'],
    }),

    getCommentsByAdvId: builder.query({
      query: (advId) => `/ads/${advId}/comments`,
      providesTags: ['Comment'],
    }),

    addCommentToAdv: builder.mutation({
      query: ({ advId, payload }) => ({
        url: `/ads/${advId}/comments`,
        method: 'POST',
        body: { text: payload.review },
      }),
      invalidatesTags: ['Comment'],
    }),
  }),
});

export const {
  useGetAdvsQuery,
  useGetAdvsBySortingQuery,
  useGetAdvByIdQuery,
  useAddAdvMutation,
  useDeleteAdvMutation,
  useUpdateAdvMutation,
  useAddAdvPictureMutation,
  useDeleteAdvPictureMutation,
  useGetCommentsByAdvIdQuery,
  useAddCommentToAdvMutation,
} = advApi;
