const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

export const getPopularList = async () => {
  const res = await fetch("data/list-by-popular.json");
  const data = await res.json();
  return data.items;
};

export const getChannelInfo = async (channelId) => {
  const res = await fetch(
    `${BASE_URL}/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_API_KEY}`
  );
  const data = await res.json();
  return data.items[0];
};

export const getRelatedVideos = async (videoId) => {
  const res = await fetch(
    `${BASE_URL}/search?part=snippet&relatedToVideoId=${videoId}&maxResults=25&type=video&key=${process.env.REACT_APP_API_KEY}`
  );
  const data = await res.json();
  return data.items;
};
