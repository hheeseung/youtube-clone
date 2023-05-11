import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useAPI } from "../context/ApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtubeAPI } = useAPI();
  const {
    isLoading,
    data: videos,
    error,
  } = useQuery(["videos", keyword], () => youtubeAPI.search(keyword));

  return (
    <ul>
      {videos &&
        videos.map((video) => <li key={video.id}>{video.snippet.title}</li>)}
    </ul>
  );
}
