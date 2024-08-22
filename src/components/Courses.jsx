import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useLoaderData } from "react-router-dom";
import YouTube from "react-youtube";

const Courses = () => {
  const playList = useLoaderData();
  const [videos, setVideos] = useState([]);
  console.log(playList);
  useEffect(() => {
    if (playList) {
      setVideos(playList);
    }
  }, [playList]);

  return (
    <div className="grid grid-cols-3  gap-5">
      {videos.map((video) => (
        <div key={video.id} className="">
       
            {/* <YouTube
              videoId={video.snippet.resourceId.videoId}
              className="inset mx-3"
            /> */}
          <ReactPlayer url={video.snippet.resourceId.videoId} />
        </div>
      ))}
    </div>
  );
};

export default Courses;
