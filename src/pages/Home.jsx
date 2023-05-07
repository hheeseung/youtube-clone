import { useQuery } from "@tanstack/react-query";
import VideoList from "../components/VideoList";
import { getPopularList } from "../services/fetcher";
import { Helmet } from "react-helmet";

export default function Home() {
  const { data: videos } = useQuery(["popularVids"], getPopularList);

  return (
    <>
      <Helmet>
        <title>YouTube Clone</title>
      </Helmet>
      <VideoList videos={videos} />
    </>
  );
}
