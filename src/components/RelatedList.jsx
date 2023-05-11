import { useEffect } from "react";
import RelatedItem from "./RelatedItem";
import { useQuery } from "@tanstack/react-query";
import { getRelatedVideos } from "../services/fetcher";

export default function RelatedList({ videoId }) {
  // const { data: relatedVideo, refetch } = useQuery(["relatedVideo"], () =>
  //   getRelatedVideos(videoId)
  // );

  // useEffect(() => {
  //   refetch();
  // }, [videoId, refetch]);

  return (
    <h1>RelatedList</h1>
    // <ul className="xl:w-1/3 w-full">
    //   {relatedVideo &&
    //     relatedVideo.map((video) => (
    //       <RelatedItem key={video.id.videoId} video={video} />
    //     ))}
    // </ul>
  );
}
