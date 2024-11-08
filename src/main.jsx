
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home.jsx';
import JoinClub from './components/JoinClub.jsx';
import Member from './components/Member.jsx';
import Courses from './components/Courses/Courses.jsx';
import DeptServices from './components/DeptServices.jsx';
import { playlistLoader } from './loaders/playListLoader.js';
import CourseDetails from './components/Courses/CourseDetails.jsx';
import allPlayListLoader from './loaders/allPlaylistLoader.js';
import Auth from './Forms/Auth/Auth.jsx';
import Login from './Forms/Auth/Login.jsx';
import Register from './Forms/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/join-club", element: <JoinClub /> },
      { path: "/member", element: <Member /> },
      { path: "/courses", element: <Courses />, loader: allPlayListLoader },
      { path: "/courses/:id", element: <CourseDetails />, loader: playlistLoader },
      { path: "/deparment-Service", element: <DeptServices /> },
    ]
  },
  {
    path: "/auth", // Change the path to "/auth"
    element: <App />,
    children: [
      {
        path: "/auth", // This path will now correctly match
        element: <Auth />
      },
      {
        path: "sign-in", // Path now starts from "/auth/sign-in"
        element: <Login />
      },
      {
        path:"sign-up",
        element:<Register></Register>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

