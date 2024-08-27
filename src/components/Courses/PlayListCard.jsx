import { Link } from "react-router-dom";

const PlayListCard = ({playList}) => {
  return (
    <div>
      <div
        key={playList.id}
        className="flex flex-col my-4 md:w-4/5 sm:w-full mx-auto "
      >
        <div className="card card-side bg-gradient shadow-xl">
          <figure className="p-2 rounded-md">
            <img
              className="img-fluid inset "
              src={playList?.snippet?.thumbnails?.medium?.url}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{playList?.snippet?.title}</h2>
            <p className=" text-sm font-semibold">
              Click the button to watch the playlist.
            </p>
            <div className="card-actions justify-end">
              <Link to={`/courses/${playList.id}`}>
                <button className="btn bg-[#29b6f6] hover:bg-blue-800 text-white font-bold border-none shadow-lg shadow-blue-600 ">
                  Watch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayListCard;
