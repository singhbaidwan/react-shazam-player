import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import {
  useGetArtistDetailsQuery,
  useGetOnlyArtistDetailQuery,
} from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { id: artistId } = useParams();
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  const {
    data: artistOnlyData,
    isFetching: isFetchingArtistOnlyDetail,
    erorr: e,
  } = useGetOnlyArtistDetailQuery(artistId);

  if (isFetchingArtistDetails || isFetchingArtistOnlyDetail)
    return <Loader title="Loading Artist Details" />;
  if (error || e) return <Error />;
  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={artistId}
        artist={artistOnlyData?.data[0].attributes}
      />

      <RelatedSongs
        data={artistData?.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
