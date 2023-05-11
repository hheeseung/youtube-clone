import { useNavigate } from "react-router-dom";
import { timeAgo } from "../utils/timeAgo";
import { scrollToTop } from "../utils/scrollToTop";

export default function VideoItem({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/videos/watch/${video.id}`, {
      state: { video },
    });
    scrollToTop();
  };

  return (
    <li className="mb-4 space-y-2 p-1 lg:p-0 cursor-pointer" onClick={onClick}>
      <img
        className="rounded-md w-full"
        src={thumbnails.medium.url}
        alt="video"
      />
      <h4 className="font-semibold line-clamp-2">{title}</h4>
      <div className="text-gray-500 text-sm">
        <p>{channelTitle}</p>
        <p>{timeAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
