import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../utils/scrollToTop";
import { timeAgo } from "../utils/timeAgo";

export default function RelatedItem({
  video: {
    id: { videoId },
    snippet: {
      thumbnails,
      title,
      channelId,
      channelTitle,
      description,
      publishedAt,
    },
  },
}) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/videos/watch/${videoId}`, {
      state: {
        thumbnails,
        title,
        channelId,
        channelTitle,
        description,
        publishedAt,
      },
    });
    scrollToTop();
  };

  return (
    <li className="flex space-x-2 mb-2 cursor-pointer" onClick={onClick}>
      <img
        className="rounded-md w-40"
        src={`${thumbnails.medium.url}`}
        alt="thumbnail"
      />
      <div>
        <h4 className="font-semibold mb-3">
          {title.length > 40 ? `${title.substring(0, 40)}...` : title}
        </h4>
        <div className="text-gray-500">
          <p className="text-sm">{channelTitle}</p>
          <p className="text-sm">{timeAgo(publishedAt)}</p>
        </div>
      </div>
    </li>
  );
}
