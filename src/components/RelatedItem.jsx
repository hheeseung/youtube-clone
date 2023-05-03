export default function RelatedItem({
  video: {
    snippet: { channelId, title, thumbnails, channelTitle, publishedAt },
  },
}) {
  return (
    <li className="flex space-x-2 mb-2">
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
          <p className="text-sm">{publishedAt}</p>
        </div>
      </div>
    </li>
  );
}
