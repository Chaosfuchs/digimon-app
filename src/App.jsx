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

  return (
      <Main>
      <SearchAppBar/>
      <CustomRouter/>
    </Main>
  );
}

export default App;
