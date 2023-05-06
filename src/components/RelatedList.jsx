import { useEffect } from "react";
import RelatedItem from "./RelatedItem";
import { useQuery } from "@tanstack/react-query";

export default function RelatedList({ videoId }) {
  const { data: relatedVideo, refetch } = useQuery(["relatedVideo"], () =>
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&maxResults=25&type=video&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => data.items)
  );

  useEffect(() => {
    refetch();
  }, [videoId, refetch]);

  return (
    <ul className="w-1/3">
      {relatedVideo &&
        relatedVideo.map((video) => (
          <RelatedItem key={video.id.videoId} video={video} />
        ))}
    </ul>
  );
}
