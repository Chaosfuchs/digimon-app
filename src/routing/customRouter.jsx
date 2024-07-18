/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import Home from "../container/Home";
import Favorites from "../container/Favorites";
import Profile from "../container/Profile";

function CustomRouter(props){

  const {search} = props;

  return (
    <Routes>
      <Route path="/" element={<Home search={search}/>}/>
      <Route path="favorites" element={<Favorites/>}/>
      <Route path="profile" element={<Profile/>}/>
    </Routes>
  )
}

export default CustomRouter;