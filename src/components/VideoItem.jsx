import { useNavigate } from "react-router-dom";
import { timeAgo } from "../utils/timeAgo";

export default function VideoItem({
  id,
  thumbnails,
  title,
  channelId,
  channelTitle,
  description,
  publishedAt,
}) {
  const navigate = useNavigate();
  const onClick = () =>
    navigate(`/videos/watch/${id}`, {
      state: {
        title,
        channelId,
        channelTitle,
        description,
        publishedAt,
      },
    });

  return (
    <li className="mb-4 space-y-2 cursor-pointer" onClick={onClick}>
      <img src={`${thumbnails.medium.url}`} alt="video" />
      <h4 className="font-semibold">
        {title.length > 40 ? `${title.substring(0, 40)}...` : title}
      </h4>
      <div className="text-gray-500 text-sm">
        <p>{channelTitle}</p>
        <p>{timeAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
