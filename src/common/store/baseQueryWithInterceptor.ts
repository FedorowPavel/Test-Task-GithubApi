import {BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

export const BASE_URL = process.env.REACT_APP_BASE_URL

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
})

export const baseQueryWithInterceptor: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  const res = await baseQuery(args, api, extraOptions);

  if(res.error && res.error.status === 401) {
    // api.dispatch(logout())
    console.log(res.error)
  }

  return res;
}
