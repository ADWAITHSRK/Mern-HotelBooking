import { apiSlice } from "./apiSlice";

const USER_URL = import.meta.env.VITE_USER_URL;

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<{ message: string }, { email: string; password: string; firstName: string; lastName: string }>({
            query: (data) => ({
                url: `${USER_URL}/register`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),

        login: builder.mutation<{ message: string }, { email: string; password: string }>({
            query: (data) => ({
                url: `${USER_URL}/login`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),

        logout: builder.mutation<{ message: string }, void>({
            query: () => ({
                url: `${USER_URL}/logout`,
                method: "POST",
                credentials: "include",
            }),
        }),

        getProfile: builder.query<{ _id: string; email: string; firstName: string; lastName: string }, void>({
            query: () => ({
                url: `${USER_URL}/profile`,
                method: "GET",
                credentials: "include",
            }),
            providesTags: ["User"],
        }),
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation,
    useGetProfileQuery,
} = userApiSlice;
