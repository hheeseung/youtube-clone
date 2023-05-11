import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useAPI } from "../context/ApiContext";
import VideoItem from "../components/VideoItem";

export default function Videos() {
  const { keyword } = useParams();
  const { youtubeAPI } = useAPI();
  const {
    isLoading,
    data: videos,
    error,
  } = useQuery(["videos", keyword], () => youtubeAPI.search(keyword));

  return (
    <>
      {isLoading && (
        <h1 className="h-screen flex justify-center items-center">
          Data Loading...
        </h1>
      )}
      {error && (
        <h1 className="h-screen flex justify-center items-center">
          Something Went Wrong🚫
        </h1>
      )}
      <ul className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
        {videos &&
          videos.map((video) => <VideoItem key={video.id} video={video} />)}
      </ul>
    </>
  );
}
