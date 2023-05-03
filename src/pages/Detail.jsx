import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import RelatedList from "../components/RelatedList";

export default function Detail() {
  const {
    state: { title, channelId, channelTitle, description, publishedAt },
  } = useLocation();
  const { videoId } = useParams();
  const { data: channel } = useQuery(["channelInfo"], () =>
    fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => data.items[0])
  );

  return (
    <main className="relative top-20 px-20 py-3 flex">
      <div className="w-2/3 mr-3">
        <iframe
          title="YouTube Video"
          id="player"
          type="text/html"
          width="100%"
          height="660"
          src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
        ></iframe>
        <div className="mt-2 space-y-4">
          <h3 className="font-semibold text-xl">{title}</h3>
          <div className="flex items-center space-x-2">
            <img
              className="w-8 h-8 rounded-full"
              src={`${channel && channel.snippet.thumbnails.default.url}`}
              alt="channel"
            />
            <span className="font-semibold">{channelTitle}</span>
          </div>
          <pre className="font-sans text-sm bg-zinc-100 p-2 rounded-lg">
            <p>
              Release Date:{" "}
              <span className="font-semibold">
                {publishedAt.substring(0, 10)}
              </span>
            </p>
            <br />
            {description}
          </pre>
        </div>
      </div>
      <RelatedList videoId={videoId} />
    </main>
  );
}
