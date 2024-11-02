// import Config from "../config";

// const allPlayListLoader = async () => {
//   const response = await fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${Config.channel_id}&key=${Config.api_key}&maxResults=50`);
//   const data = await response.json();
//   return data.items;
// };

// allPlayListLoader().then(playlists => {
//   console.log(playlists);
// });

// export default allPlayListLoader

import Config from "../config";

const allPlayListLoader = async () => {
  try {

    const response = await fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${Config.channel_id}&key=${Config.api_key}&maxResults=50`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching playlists:", error);
    return [];
  }
};

allPlayListLoader().then(playlists => {
  console.log(playlists);
});

export default allPlayListLoader;
