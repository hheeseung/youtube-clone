import { Helmet } from "react-helmet";
import { useAPI } from "../context/ApiContext";
import { useQuery } from "@tanstack/react-query";
import VideoItem from "./VideoItem";

export default function RelatedVideos({ id }) {
  const { youtubeAPI } = useAPI();
  const {
    isLoading,
    data: videos,
    error,
  } = useQuery(["related", id], () => youtubeAPI.relatedVideos(id));

  return (
    <>
      <Helmet>
        <title>YouTube Clone</title>
      </Helmet>
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
      <ul>
        {videos &&
          videos.map((video) => (
            <VideoItem key={video.id} video={video} type="list" />
          ))}
      </ul>
    </>
  );
}
