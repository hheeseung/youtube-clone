const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

export const getPopularList = async () => {
  const res =
    await fetch(`${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=KR&key=${process.env.REACT_APP_API_KEY}
  `);
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
