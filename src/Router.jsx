import React from "react";
import {createBrowserRouter} from 'react-router-dom';
import { Router } from "react-router-dom";
import Home from "./Components/Home";
import Login1 from "./Components/Login1";
import Signup2 from "./Components/Signup2";
const Route=createBrowserRouter([
    {path:'/',element:<Home/>},
    {path:'/login',element:<Login1/>},
    {path:'/sign',element:<Signup2/>},
]);
export default Route;