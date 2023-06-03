import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { ArtistCard, Error, Loader, SongCard } from "../components";
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";

const TopArtists = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery();

  if (isFetching) return <Loader title={"Loading Songs around you"} />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col ">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Discover Top Artists
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks.map((song, i) => (
          <ArtistCard key={song.key} track={song} />
        ))}
      </div>
    </div>
  );
};
export default TopArtists;
