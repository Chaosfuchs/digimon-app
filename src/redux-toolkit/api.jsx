import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const digimonApi = createApi({
  reducerPath: "digimonApi",
  baseQuery: fetchBaseQuery({baseUrl: "https://digimon-api.vercel.app/"}),
  endpoints: (builder) => ({
    getAllDigimon: builder.query({
      query: () => `api/digimon`,
    }),
    getDigimonByName: builder.query({
      query: (name) => `api/digimon/name/${name}`,
    }),
    getDigimonByLevel: builder.query({
      query: (level) => `api/digimon/level/${level}`,
    })
  })
});

export const {useGetAllDigimonQuery, useGetDigimonByNameQuery} = digimonApi;
