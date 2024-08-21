import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="bg-[#0A0A23] relative text-gray-200 w-full px-4 py-8 flex flex-col justify-between h-full gap-2 items-center">
      <h1 className="text-2xl font-bold text-blue-400">CUPPC</h1>
      <h3 className="underline text-blue-400">cuppc.org</h3>
      <ul className=" flex lg:space-x-8 text-sm gap-2 items-center  font-sans">
        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) => (isActive ? "active " : "default")}
          >
            Courses
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/join-club"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Join Club
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/member"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Member
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/deparment-Service"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Deparment Service
          </NavLink>
        </li>
      </ul>
      {/* logo-section */}
      <ul className="flex flex-row gap-4">
        <li className="text-blue-500">
          <FontAwesomeIcon icon={faFacebook} size="" />
        </li>
        <li>
          <Link
            to="https://www.youtube.com/watch?v=N7DaTkXdW_s&list=PLudlwq5I_xnfwHtTZB2c-aaTThE7iwOhS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600"
          >
            <FontAwesomeIcon icon={faYoutube} size="" />
          </Link>
        </li>
        <li className="">
          <FontAwesomeIcon icon={faXTwitter} size="" />
        </li>
        <li className="text-blue-500">
          <FontAwesomeIcon icon={faLinkedinIn} size="" />
        </li>
      </ul>
      <div className="absolute bottom-0 text-sm text-center text-gray-400">
        © 2024 All rights reserved by CUPPC.
      </div>
    </div>
  );
};

export default Footer;
