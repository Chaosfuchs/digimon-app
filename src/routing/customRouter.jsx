/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import Home from "../container/Home";
import Favorites from "../container/Favorites";
import Profile from "../container/Profile";

function CustomRouter(){

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="favorites" element={<Favorites/>}/>
      <Route path="profile" element={<Profile/>}/>
    </Routes>
  )
}

export default CustomRouter;