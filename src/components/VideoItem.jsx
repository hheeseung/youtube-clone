import { useNavigate } from "react-router-dom";
import { timeAgo } from "../utils/timeAgo";
import { scrollToTop } from "../utils/scrollToTop";

export default function VideoItem({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/videos/watch/${video.id}`, {
      state: { video },
    });
    scrollToTop();
  };
  const isList = type === "list";

  return (
    <li
      className={`${
        isList ? "flex gap-1" : ""
      } mb-4 space-y-2 p-1 lg:p-0 cursor-pointer`}
      onClick={onClick}
    >
      <img
        className={`rounded-md ${isList ? "w-52 mx-2" : "w-full"}`}
        src={thumbnails.medium.url}
        alt="video"
      />
      <div className="space-y-1">
        <h4 className="font-semibold line-clamp-2">{title}</h4>
        <div className="text-gray-500 text-sm">
          <p>{channelTitle}</p>
          <p>{timeAgo(publishedAt)}</p>
        </div>
      </div>
    </li>
  );
}
