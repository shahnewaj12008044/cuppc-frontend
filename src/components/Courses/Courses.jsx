import { useEffect, useState } from "react";
import {  useLoaderData, useNavigate } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/solid";
import PlayListCard from "./playListCard";

const Courses = () => {
  //getting all playlist of that channel from loader
  const allPlayLists = useLoaderData();
  //creating a variable to store the data
 const [playLists, setPlayLists] = useState([]);
//setting the array of playlist in that variable
 useEffect(() => {
    if (allPlayLists) {
      setPlayLists(allPlayLists);
    }
  }, [allPlayLists]);
  const navigate = useNavigate()
  const handleNavigate = () =>{
    navigate('/')
  }


  // console.log(playLists);
  return (
    <div className="my-container">
      <h1 className="text-center text-xl font-sans font-bold text-[#0A0A23]">
        Classes of Qubits Programming
      </h1>
      {playLists.map((playList) => (
        // showing a card for each playlist
      <PlayListCard playList={playList}></PlayListCard>
      ))}
      <div className="w-full text-center mt-8">
        <button onClick={handleNavigate} className=" btn btn-outline font-bold btn-accent">
          <HomeIcon className="size-6"></HomeIcon>
          Back To HomePage
        </button>
      </div>
    </div>
  );
};

export default Courses;
