import Config from "../config";



export const playlistLoader = async ({params}) => {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${params.id}&key=${Config.api_key}&maxResults=10`);
  const data = await response.json();
  // console.log(data)
  return data.items;
};

