import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import JoinClub from './components/JoinClub.jsx';
import Member from './components/Member.jsx';
import Courses from './components/Courses/Courses.jsx';
import DeptServices from './components/DeptServices.jsx';
import  { playlistLoader } from './loaders/playListLoader.js';
import CourseDetails from './components/Courses/CourseDetails.jsx';
import allPlayListLoader from './loaders/allPlaylistLoader.js';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {path:'/',
        element:<Home></Home>
      },
      {
        path:'/join-club',
        element:<JoinClub></JoinClub>
      },
      {
        path:'/member',
        element:<Member></Member>
      },
      {
        path:'/courses',
        element:<Courses></Courses>,
        loader:allPlayListLoader
      },
      {
        path:'/courses/:id',
        element:<CourseDetails></CourseDetails>,
        loader:playlistLoader
      },
      {
        path:'/deparment-Service',
        element:<DeptServices></DeptServices>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
