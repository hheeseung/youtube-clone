import { createContext, useContext } from "react";
import Fetcher from "../services/fetcher";
import FetcherClient from "../services/fetcherClient";
import FakeFetcherClient from "../services/fakeFetcherClient";

const ApiContext = createContext();

// const client = new FetcherClient();
const client = new FakeFetcherClient();
const youtubeAPI = new Fetcher(client);

export default function ApiProvider({ children }) {
  return (
    <ApiContext.Provider value={{ youtubeAPI }}>{children}</ApiContext.Provider>
  );
}

export function useAPI() {
  return useContext(ApiContext);
}
