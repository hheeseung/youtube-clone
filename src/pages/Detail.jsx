import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Channels from "../components/Channels";
import RelatedVideos from "../components/RelatedVideos";

export default function Detail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, publishedAt, description } =
    video.snippet;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="flex flex-col lg:flex-row px-1 lg:px-0">
        <div className="basis-4/6">
          <iframe
            title={title}
            id="player"
            type="text/html"
            width="100%"
            height="640"
            src={`https://www.youtube.com/embed/${video.id}`}
          ></iframe>
          <div className="my-2 space-y-4">
            <h3 className="font-semibold text-xl">{title}</h3>
            <Channels id={channelId} title={channelTitle} />
            <pre className="font-sans text-sm bg-zinc-100 p-2 rounded-lg whitespace-pre-wrap">
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
        <div className="basis-2/6">
          <RelatedVideos id={video.id} />
        </div>
      </main>
    </>
  );
}
