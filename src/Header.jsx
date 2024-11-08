import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    // for large device
    <div className="sticky top-0 z-50 shadow bg-[#0A0A23] px-4 py-5 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen md:px-24 lg:px-8">
  
      <div className="relative flex items-center justify-between">
        {/* logo section */}
        <Link to="/" className="inline-flex items-center ">
          <span className="ml-2 text-2xl font-bold tracking-wider text-[#29b6f6] font-exo">
            CUPPC
          </span>
        </Link>
        {/* nav Items section */}
        <ul className="hidden lg:flex space-x-8 items-center text-gray-200 font-semibold">
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? "active" : "default")}
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
          <li >
            <NavLink
              to="/auth"
             className={({isActive})=>(isActive?"text-[#0A0A23] btn-primary flex items-center justify-center":"text-white btn-primary")}
            >
             Sign in  <LuLogIn className="ml-1 size-5" />
            </NavLink>
          </li>
        </ul>
        {/* mobile navbar section */}

        
        <div className="lg:hidden">
          {/* dropdown open button */}
          <button
            aria-level="open menu"
            title="open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="h-6 w-6 text-gray-200"></Bars3BottomRightIcon>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 overflow-hidden  shadow-lg rounded hover:shadow-2xl w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* logo and button section */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <Link to="/" className="inline-flex ">
                      <span className=" text-xl font-bold font-exo tracking-wide text-[#11113b]">
                        CUPPC
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* nav bar section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/courses"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/join-club"
                        className="font-medium tracking-wide text-gray-700 hover:text-blue-400 transition-colors duration-200 "
                      >
                        Join Club
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/member"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Member
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/deparment-Service"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Department Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/auth"
                        className="btn-primary flex justify-center "
                      >
                        sign in <LuLogIn className="ml-2"/>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
