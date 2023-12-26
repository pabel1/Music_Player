import { apiSlice } from "../ApiSlice/apiSlice";

export const musicApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllMusic: builder.query({
      query: (data) => {
        const {
          limit,
          page,
          searchTerm,
          sortOrder,
          sortBy,
          title,
          artist,
          Album,
          releaseYear,
          genre,
        } = data;

        const queryParams = new URLSearchParams();

        if (sortOrder) {
          queryParams.append("sortOrder", sortOrder);
        }
        if (sortBy) {
          queryParams.append("sortBy", sortBy);
        }
        if (title) {
          queryParams.append("title", title);
        }
        if (artist) {
          queryParams.append("artist", artist);
        }
        if (Album) {
          queryParams.append("Album", Album);
        }
        if (releaseYear) {
          queryParams.append("releaseYear", releaseYear);
        }
        if (Album) {
          queryParams.append("Album", Album);
        }
        if (genre) {
          queryParams.append("genre", genre);
        }

        if (searchTerm) {
          queryParams.append("searchTerm", searchTerm);
        }

        queryParams.append("page", page || "");
        queryParams.append("limit", limit || "");

        return {
          url: `/music/get-all?${queryParams.toString()}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },
      providesTags: ["music"],
    }),
    singleMusic: builder.query({
      query: (data) => {
        const { id } = data;
        console.log(id);

        return {
          url: `/music/get-all/${id}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },
      providesTags: ["music"],
    }),
  }),
});

export const { useGetAllMusicQuery, useSingleMusicQuery } = musicApiSlice;
