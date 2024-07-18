/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import Home from "../container/Home";
import Favorites from "../container/Favorites";

function CustomRouter(props){

  const {search} = props;

  return (
    <Routes>
      <Route index element={<Home search={search}/>}/>
      <Route path="favorites" element={<Favorites/>}/>
    </Routes>
  )
}

export default CustomRouter;