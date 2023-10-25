import React from "react";
import { BottomNavigation, Pagination  } from "@mui/material";

function BottomNav(){

  return(
    <BottomNavigation
    style={{ width: '100%', height: '70px', backgroundColor: '#343aeb', display: 'flex', alignItems: 'center'}}
    showLabels
    value={""}
    onChange={(event, newValue) => {
    setValue(newValue);
    }}
    >
      <Pagination count={10} color="primary" size="large"/>
    </BottomNavigation>
  )
}

export default BottomNav;