// const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

// export const getPopularList = async () => {
//   const res = await fetch(
//     `${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=KR&key=${process.env.REACT_APP_API_KEY}`
//   );
//   const data = await res.json();
//   return data.items;
// };

// export const getChannelInfo = async (channelId) => {
//   const res = await fetch(
//     `${BASE_URL}/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_API_KEY}`
//   );
//   const data = await res.json();
//   return data.items[0];
// };

// export const getRelatedVideos = async (videoId) => {
//   const res = await fetch(
//     `${BASE_URL}/search?part=snippet&relatedToVideoId=${videoId}&maxResults=25&type=video&key=${process.env.REACT_APP_API_KEY}`
//   );
//   const data = await res.json();
//   return data.items;
// };

// export const getSearchResults = async (keyword) => {
//   const res = await fetch(
//     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=${process.env.REACT_APP_API_KEY}`
//   );
//   const data = await res.json();
//   return data.items;
// };

export default class Fetcher {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          q: keyword,
          type: "video",
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          chart: "mostPopular",
          maxResults: 25,
          regionCode: "KR",
        },
      })
      .then((res) => res.data.items);
  }
}
