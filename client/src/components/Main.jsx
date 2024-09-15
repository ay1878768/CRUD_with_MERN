import React, { useEffect,useState } from 'react'
import Navbar from './Navbar.jsx'
import Cardcontainer from './Cardcontainer.jsx';
import Newform from './Newform.jsx'
import Updateform from "./Updateform.jsx"
import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
const Main = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<div><Navbar/><Outlet/></div>,
      children:[
        {
          path:"/",
          element:<Cardcontainer/>
        },
        {
          path:"/new",
          element:<Newform/>
        },
        {
          path:"/update/:id",
          element:<Updateform/>
        }
      ]
    }, 
  ])
  return (
    <RouterProvider router={router}/>
  )
}
export default Main