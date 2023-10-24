import React from "react";
import "./App.css";
import { styled } from '@mui/material/styles';
import MediaCard from "./components/Card/card";
import { Box, Grid, CircularProgress } from "@mui/material";
import SearchAppBar from "./components/AppBar/appbar";
import { useGetAllDigimonQuery } from "./redux-toolkit/api";
import BottomNav from "./components/BottomNav/bottomNav";

const Main = styled('div') (({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: "100vh",
  width: "100vw",
}))

const AppContainer = styled(Box)(({theme}) => ({
  padding: '3rem', 
  height: '90vh', 
  overflowY: 'auto'
}));

function App() {

  const {data, error, isLoading} = useGetAllDigimonQuery();

  //const isFakeLoading = true;

  console.log(data)
  
  return (
      <Main>
    <SearchAppBar/>
      <AppContainer>
      {isLoading ? (
      <div style={{display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <CircularProgress color="primary" size="100px" />
      </div>
      ) : (
        <Grid container style={{width: '100%', justifyContent: 'center'}}>
          {data.map((card) => {
            return (
              <MediaCard key={crypto.randomUUID()} name={card.name} img={card.img} level={card.level}/>
            )
          })}
        </Grid> 
      )}
      </AppContainer>
      <BottomNav/>
    </Main>
  );
}

export default App;
