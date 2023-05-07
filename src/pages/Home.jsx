import { useQuery } from "@tanstack/react-query";
import VideoList from "../components/VideoList";
import { getPopularList } from "../services/fetcher";

export default function Home() {
  const { data: videos } = useQuery(["popularVids"], getPopularList);

  return <VideoList videos={videos} />;
}
