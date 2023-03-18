import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const commentsAPI = createApi({
  reducerPath: "commentsAPI",
  tagTypes: ["Comments"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (build) => ({
    fetchAllComments: build.query({
      query: (limit = 10) => ({
        url: "/comments",
        params: {
          _limit: limit,
        },
      }),
      providesTags: result => ['Comments']
    }),
    createComment: build.mutation({
      query: (comment) => ({
        url: `/comments`,
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["Comments"],
    }),
    updateComment: build.mutation({
      query: (comment) => ({
        url: `/comments/${comment.id}`,
        method: "PUT",
        body: comment,
      }),
      invalidatesTags: ["Comments"],
    }),
    deleteComment: build.mutation({
      query: (comment) => ({
        url: `/comments/${comment.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Comments"],
    }),
  }),
});


