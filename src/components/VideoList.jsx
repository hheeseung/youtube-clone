import VideoItem from "./VideoItem";

export default function VideoList({ videos }) {
  return (
    <ul className="w-full relative top-20 px-20 py-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {videos &&
        videos.map((video) => (
          <VideoItem key={video.id} id={video.id} {...video.snippet} />
        ))}
    </ul>
  );
}
