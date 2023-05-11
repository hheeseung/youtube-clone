import { useQuery } from "@tanstack/react-query";
import { useAPI } from "../context/ApiContext";

export default function Channels({ id, title }) {
  const { youtubeAPI } = useAPI();
  const { data: channel } = useQuery(
    ["channel", id],
    () => youtubeAPI.channels(id),
    {
      staleTime: 1000 * 60 * 60,
    }
  );

  return (
    <div className="flex items-center space-x-2">
      <img className="w-8 h-8 rounded-full" src={channel} alt="channel" />
      <span className="font-semibold">{title}</span>
    </div>
  );
}
