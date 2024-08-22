
const API_KEY = 'AIzaSyCbpi5KrHcnA9zkzug6j6U3LRh--KeB6cw';
const PLAYLIST_ID = "PLudlwq5I_xnfwHtTZB2c-aaTThE7iwOhS";

export const playlistLoader = async () => {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&key=${API_KEY}&maxResults=10`);
  const data = await response.json();
  return data.items;
};

