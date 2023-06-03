import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "ca94d96098msh9cab51d9c761537p1eb66ajsna831eff2fdf2"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "charts/track" }),
    getSongDetails: builder.query({
      query: ({ songid }) => `songs/get-details?key=${songid}`,
    }),
    getSongsRelated: builder.query({
      query: ({ songid }) =>
        `shazam-songs/list-similarities?id=track-similarities-id-${songid}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `artists/get-top-songs?id=${artistId}`,
    }),
    getOnlyArtistDetail: builder.query({
      query: (artistId) => `artists/get-details?id=${artistId}`,
    }),
    getSongsByCountry: builder.query({
      query: (countryCode) => "charts/track",
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongsRelatedQuery,
  useGetArtistDetailsQuery,
  useGetOnlyArtistDetailQuery,
  useGetSongsByCountryQuery,
} = shazamCoreApi;
