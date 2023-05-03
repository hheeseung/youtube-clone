import { useQuery } from "@tanstack/react-query";
import VideoList from "../components/VideoList";

export default function Home() {
  const { data: videos } = useQuery(["popularVids"], () =>
    fetch("data/list-by-popular.json")
      .then((res) => res.json())
      .then((data) => data.items)
  );

  return <VideoList videos={videos} />;
}
