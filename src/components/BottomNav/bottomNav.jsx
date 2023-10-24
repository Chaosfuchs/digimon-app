import React from "react";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Restore, Favorite, LocationCity } from "@mui/icons-material";

function BottomNav(){

  return(
    <BottomNavigation
    style={{ width: '100%', height: '70px', backgroundColor: '#343aeb'}}
  showLabels
  value={""}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
>
  <BottomNavigationAction style={{color: 'white'}} label="Recents" icon={<Restore />} />
  <BottomNavigationAction style={{color: 'white'}} label="Favorites" icon={<Favorite />} />
  <BottomNavigationAction style={{color: 'white'}} label="Nearby" icon={<LocationCity />} />
</BottomNavigation>
  )
}

export default BottomNav;