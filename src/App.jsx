import React from "react";
import "./App.css";
import { styled } from '@mui/material/styles';
import SearchAppBar from "./components/AppBar/appbar";
import CustomRouter from "./routing/customRouter";

const Main = styled('div') (() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '5rem',
  
}))

function App() {

  const [search, setSearch] = React.useState("");

  return (
      <Main>
      <SearchAppBar search={search} setSearch={setSearch}/>
      <CustomRouter search={search}/>
    </Main>
  );
}

export default App;
