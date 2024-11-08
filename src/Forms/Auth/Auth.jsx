// import React, { useState, useEffect } from "react";
// import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";

// const Auth = () => {
//   const [selectedRole, setSelectedRole] = useState(null);
//   const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
//   const [fade, setFade] = useState(true); // For fade effect

//   const handleRoleSelect = (role) => {
//     setSelectedRole(role);
//     console.log(`Selected role: ${role}`);
//   };

//   // List of background images
//   const backgroundImages = [
//     "/pictures/background1.jpg",
//     "/pictures/background2.jpg",
//     "/pictures/background3.jpg",
//   ];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setFade(false); // Start fading out the current image

//       setTimeout(() => {
//         // After fading out, update the background index and start fading in
//         setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
//         setFade(true); // Start fading in the new image
//       }, 1000); // Adjust this timeout to match the fade-out duration (1s)

//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(intervalId); // Clear the interval on component unmount
//   }, []);

//   return (
//     <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
//       {/* Background Image Layer */}
//       <div
//         className={`absolute inset-0 transition-opacity duration-1000 ${
//           fade ? "opacity-100" : "opacity-0"
//         }`}
//         style={{
//           backgroundImage: `url(${backgroundImages[currentBackgroundIndex]})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       ></div>

//       {/* Main Content (Static) */}
//       <div className="relative z-10 flex flex-col items-center w-full max-w-lg p-8 space-y-8 bg-black bg-opacity-75 rounded-lg shadow-xl">
//         <h2 className="text-2xl font-semibold text-center text-white">
//           Sign In As
//         </h2>

//         <div className="flex justify-center space-x-8">
//           {/* Teacher Option */}
//           <button
//             onClick={() => handleRoleSelect("Teacher")}
//             className={`flex items-center justify-center px-6 py-4 space-x-2 text-gray-950 font-bold transition rounded-lg ${
//               selectedRole === "Teacher"
//                 ? "bg-[#1E90FF]"
//                 : "bg-gray-300 hover:bg-[#1E90FF]"
//             } focus:outline-none`}
//           >
//             <FaChalkboardTeacher className="text-2xl" />
//             <span>Teacher</span>
//           </button>

//           {/* Student Option */}
//           <button
//             onClick={() => handleRoleSelect("Student")}
//             className={`flex items-center justify-center px-6 py-4 space-x-2 font-bold text-gray-950 transition rounded-lg ${
//               selectedRole === "Student"
//                 ? "bg-[#1E90FF]"
//                 : "bg-gray-300 hover:bg-[#1E90FF]"
//             } focus:outline-none`}
//           >
//             <FaUserGraduate className="text-2xl" />
//             <span>Student</span>
//           </button>
//         </div>

//         {/* Display Selected Role */}
//         {selectedRole && (
//           <p className="mt-6 text-lg text-center text-gray-300">
//             You have selected:{" "}
//             <span className="font-semibold text-[#1E90FF]">{selectedRole}</span>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Auth;

import React, { useState, useEffect } from "react";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [fade, setFade] = useState(true); // For fade effect
  const navigate = useNavigate()
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    // console.log(`Selected role: ${role}`);
    navigate('/auth/sign-in', { state: { role } });
  };

  // List of background images
  const backgroundImages = [
    "/pictures/background1.jpg",
    "/pictures/background2.jpg",
    "/pictures/background3.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Start fading out the current image

      setTimeout(() => {
        // Update background index and fade in the new image
        setCurrentBackgroundIndex(
          (prevIndex) => (prevIndex + 1) % backgroundImages.length
        );
        setFade(true); // Start fading in the new image
      }, 400); // Match this to the fade-out duration (1 second)
    }, 3000); // Change background every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-fixed">
      {/* Background Layer */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${backgroundImages[currentBackgroundIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-lg p-8 space-y-8 bg-black bg-opacity-75 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold text-center text-white">
          Sign In As
        </h2>

        <div className="flex justify-center space-x-8">
          {/* Teacher Option */}
          <button
            onClick={() => handleRoleSelect("teacher")}
            className={`flex items-center justify-center px-6 py-4 space-x-2 text-gray-950 font-bold transition rounded-lg ${
              selectedRole === "Teacher"
                ? "bg-[#1E90FF]"
                : "bg-gray-300 hover:bg-[#1E90FF]"
            } focus:outline-none`}
          >
            <FaChalkboardTeacher className="text-2xl" />
            <span>Teacher</span>
          </button>

          {/* Student Option */}
          <button
            onClick={() => handleRoleSelect("student")}
            className={`flex items-center justify-center px-6 py-4 space-x-2 font-bold text-gray-950 transition rounded-lg ${
              selectedRole === "Student"
                ? "bg-[#1E90FF]"
                : "bg-gray-300 hover:bg-[#1E90FF]"
            } focus:outline-none`}
          >
            <FaUserGraduate className="text-2xl" />
            <span>Student</span>
          </button>
        </div>

        {/* Display Selected Role */}
        {selectedRole && (
          <p className="mt-6 text-lg text-center text-gray-300">
            You have selected:{" "}
            <span className="font-semibold text-[#1E90FF]">{selectedRole}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;
