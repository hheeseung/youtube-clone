import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSearchResults } from "../services/fetcher";
import SearchVideoList from "../components/SearchVideoList";

export default function Search() {
  const { keyword } = useParams();
  const { data: searchVideos } = useQuery(["search"], () =>
    getSearchResults(keyword)
  );

  return <SearchVideoList videos={searchVideos} />;
}
