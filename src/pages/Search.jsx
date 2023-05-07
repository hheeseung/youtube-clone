import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSearchResults } from "../services/fetcher";
import SearchVideoList from "../components/SearchVideoList";
import { Helmet } from "react-helmet";

export default function Search() {
  const { keyword } = useParams();
  const { data: searchVideos } = useQuery(["search"], () =>
    getSearchResults(keyword)
  );

  return (
    <>
      <Helmet>
        <title>{keyword} - YouTube Clone</title>
      </Helmet>
      <SearchVideoList videos={searchVideos} />
    </>
  );
}
