
const API_KEY = 'AIzaSyCbpi5KrHcnA9zkzug6j6U3LRh--KeB6cw';


export const playlistLoader = async ({params}) => {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${params.id}&key=${API_KEY}&maxResults=10`);
  const data = await response.json();
  // console.log(data)
  return data.items;
};

