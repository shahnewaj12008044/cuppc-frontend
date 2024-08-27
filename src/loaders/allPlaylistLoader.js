const API_KEY = 'AIzaSyCbpi5KrHcnA9zkzug6j6U3LRh--KeB6cw';
const CHANNEL_ID = 'UCbsWfrMWpI5LJd4D6tBlWQQ';

const allPlayListLoader = async () => {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${CHANNEL_ID}&key=${API_KEY}&maxResults=50`);
  const data = await response.json();
  return data.items;
};

allPlayListLoader().then(playlists => {
  console.log(playlists);
});

export default allPlayListLoader