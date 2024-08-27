import { useLoaderData, useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";




const CourseDetails = () => {
  const playList = useLoaderData();
  const [videos, setVideos] = useState([]);
  // console.log(playList);
  useEffect(() => {
    if (playList) {
      setVideos(playList);
    }
  }, [playList]);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const opts = {
    height: "300",
    width: "300",

    playerVars: {
      autoplay: 0,
      controls: 1,
    },
  };

  return (
    <div className="my-container">
      <div className="grid md:grid-cols-3 sm:grid-cols-1  gap-4 px-4 py-12 bg-slate-100   rounded-lg shadow-lg">
        {videos.map((video) => (
          <div
            key={video.id}
            className="card bg-blue-300 w-full md:w-80 mx-auto shadow-xl shadow-blue-950"
          >
            <div className=" overflow-hidden p-2">
              <div
                className="inset "
                style={{ borderRadius: "0.75rem", overflow: "hidden" }}
              >
                <YouTube
                  opts={opts}
                  videoId={video.snippet.resourceId.videoId}
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div className="card-body">
              <h2 className="font-semibold">{video.snippet.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button onClick={handleGoBack} className="btn btn-outline btn-accent  ">
       <ArrowLeftIcon className="size-6 border-2 border-teal-400 rounded-full hover:border-gray-900 "></ArrowLeftIcon>

          Go Back
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
