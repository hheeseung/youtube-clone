import VideoItem from "./VideoItem";

export default function SearchVideoList({ videos }) {
  return (
    <ul className="w-full relative top-20 px-20 py-3 grid sm:grid-cols-5 gap-4">
      {videos &&
        videos.map((video) => (
          <VideoItem
            key={video.id.videoId}
            id={video.id.videoId}
            {...video.snippet}
          />
        ))}
    </ul>
  );
}
