import React from "react";
import "./App.css";
import { styled } from '@mui/material/styles';
import MediaCard from "./components/Card/card";
import { Grid, CircularProgress } from "@mui/material";
import SearchAppBar from "./components/AppBar/appbar";
import { useGetAllDigimonQuery } from "./redux-toolkit/api";
//import BottomNav from "./components/BottomNav/bottomNav";

const Main = styled('div') (() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '5rem',
  
}))

function App() {

  const {data, /* error, */ isLoading} = useGetAllDigimonQuery();

  //const isFakeLoading = true;

  console.log(data)
  
  const [search, setSearch] = React.useState("");

  return (
      <Main>
      <SearchAppBar search={search} setSearch={setSearch}/>
      {isLoading ? (
      <div style={{display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <CircularProgress color="primary" size="100px" />
      </div>
      ) : (
        <Grid container style={{justifyContent: 'center'}}>
          {data?.filter((item) => {
            return(
              item.name?.toLowerCase().includes(search?.toLocaleLowerCase()) || item.level?.toLowerCase().includes(search?.toLocaleLowerCase())
            )
          }).map((card) => {
            return (
              <MediaCard key={crypto.randomUUID()} name={card.name} img={card.img} level={card.level}/>
            )
          })}
        </Grid> 
      )}
      {/*<BottomNav/>*/}
    </Main>
  );
}

export default App;
