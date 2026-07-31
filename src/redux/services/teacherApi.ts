import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TeacherApiResponse } from "../../models/TeacherApiResponse";
import type { PaginationParams } from "../../models/Pagination";
export const teacherApi = createApi({
    reducerPath: "teacherApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com/",
    }),

    endpoints: (builder) => ({
        getTeachers: builder.query<TeacherApiResponse, PaginationParams>({
            query: ({ page, limit }) => {
  const skip = (page - 1) * limit;

  return `users?limit=${limit}&skip=${skip}`;
},
        }),
    }
),
});

export const {
    useGetTeachersQuery,
} = teacherApi;